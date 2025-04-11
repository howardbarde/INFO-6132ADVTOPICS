import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { ref, onValue, remove, update } from 'firebase/database';
import { auth, db } from '../../../firebase';
import EventCard from '../../components/EventCard';
import styles from './styles';

export default function FavouritesScreen({ navigation }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const userId = auth.currentUser?.uid;
    const eventsRef = ref(db, 'events');

    const unsubscribe = onValue(eventsRef, (snapshot) => {
      const data = snapshot.val() || {};
      const favs = Object.entries(data)
        .filter(([_, event]) => event.ownerId === userId && event.favourite)
        .map(([id, event]) => ({ id, ...event }));

      setFavourites(favs);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = (id) => {
    Alert.alert('Delete Event', 'Are you sure you want to delete this event?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => remove(ref(db, `events/${id}`)),
      },
    ]);
  };

  const handleToggleFavourite = async (id, currentFavourite) => {
    try {
      await update(ref(db, `events/${id}`), {
        favourite: !currentFavourite,
      });
    } catch (error) {
      Alert.alert('Error', 'Could not update favourite status');
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Favourite Events',
      headerRight: () => (
        <TouchableOpacity onPress={() => auth.signOut()} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={favourites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <EventCard
              event={item}
              onEdit={() => navigation.navigate('EditEvent', { event: item })}
              onDelete={() => handleDelete(item.id)}
              onToggleFavourite={() =>
                handleToggleFavourite(item.id, item.favourite)
              }
            />
          )}
          contentContainerStyle={[
            styles.eventListContainer,
            favourites.length === 0 && styles.emptyListContainer,
          ]}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No favourite events yet!</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}
