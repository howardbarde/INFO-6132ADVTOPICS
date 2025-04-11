import React, { useEffect, useLayoutEffect, useState } from 'react';
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

export default function DashboardScreen({ navigation }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const userId = auth.currentUser?.uid;
    const eventsRef = ref(db, 'events');

    const unsubscribe = onValue(eventsRef, (snapshot) => {
      const data = snapshot.val() || {};
      const filteredEvents = Object.entries(data)
        .filter(([_, event]) => event.ownerId === userId)
        .map(([id, event]) => ({ id, ...event }));

      setEvents(filteredEvents);
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
      title: 'My Events',
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
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <EventCard
              event={item}
              onEdit={() => navigation.navigate('EditEvent', { event: item })}
              onDelete={() => handleDelete(item.id)}
              onToggleFavourite={handleToggleFavourite}
            />
          )}
          contentContainerStyle={[
            styles.eventListContainer,
            events.length === 0 && styles.emptyListContainer,
          ]}
          ListEmptyComponent={
            <View style={styles.emptyWrapper}>
              <Text style={styles.emptyText}>No events yet</Text>
              <TouchableOpacity
                style={styles.createBtn}
                onPress={() => navigation.navigate('CreateEvent')}
              >
                <Text style={styles.createBtnText}>Create New Event</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}
