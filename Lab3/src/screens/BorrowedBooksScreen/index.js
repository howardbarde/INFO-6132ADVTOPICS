import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { db } from '../../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useBorrowedBooks } from '../../contexts/BorrowedBooksContext';
import styles from "./styles";

const BorrowedBooksScreen = () => {
  const { borrowedBooks, setBorrowedBooks } = useBorrowedBooks();

  // Handle book return
  const handleReturnBook = async (bookToReturn) => {
    try {
      const docRef = doc(db, 'borrowedBooks', 'allBorrowedBooks');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const remainingBooks = docSnap.data().books.filter((book) => book.title !== bookToReturn.title);

        await updateDoc(docRef, { books: remainingBooks });
        setBorrowedBooks(remainingBooks);

        Alert.alert('Success', 'Book returned successfully!');
      }
    } catch (error) {
      console.error('Error returning book:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Your Borrowed Books</Text>
      {borrowedBooks.length === 0 ? (
        <Text style={styles.noBooksText}>You haven't borrowed any books yet.</Text>
      ) : (
        <FlatList
          data={borrowedBooks}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.bookItem}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>{item.author}</Text>
              <TouchableOpacity
                style={styles.returnButton}
                onPress={() => handleReturnBook(item)}
              >
                <Text style={styles.returnButtonText}>Return Book</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default BorrowedBooksScreen;
