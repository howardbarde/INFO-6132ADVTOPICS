import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { ref, onValue, update } from 'firebase/database';
import { auth, db } from '../../../firebase';
import EventCard from '../../components/EventCard';
import styles from "./styles";

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

  const handleUnfavourite = (id) => {
    Alert.alert('Remove Favourite', 'Are you sure you want to remove this from favourites?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Remove',
        style: 'destructive',
        onPress: () => update(ref(db, `events/${id}`), { favourite: false }),
      },
    ]);
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
          renderItem={({ item }) => (
            <EventCard
              event={item}
              onDelete={() => handleUnfavourite(item.id)}
              onToggleFavourite={() => handleUnfavourite(item.id)}
              hideEdit
            />
          )}
          keyExtractor={(item) => item.id}
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
