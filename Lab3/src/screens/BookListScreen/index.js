import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore'; 
import styles from "./styles";

const BookListScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch books from Firestore
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'books'));
        const booksData = querySnapshot.docs.map(doc => doc.data());
        setBooks(booksData);
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

    fetchBooks();
  }, []);

  // Filter books based on search term
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Books</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search by title or author..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <FlatList
        data={filteredBooks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.bookItem}
            onPress={() => navigation.navigate('BookDetails', { book: item })}
          >
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.viewBorrowedButton}
        onPress={() => navigation.navigate('BorrowedBooks')}
      >
        <Text style={styles.buttonText}>View Borrowed Books</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookListScreen;
