import React, { useState, useLayoutEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { ref, push, serverTimestamp } from 'firebase/database';
import { auth, db } from '../../../firebase';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { TextInput, Button, HelperText } from 'react-native-paper';
import styles from "./styles";

export default function CreateEventScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');

  const handleCreate = async () => {
    setTitleError('');
    setDescriptionError('');
    setLocationError('');
    setDateError('');
    setTimeError('');

    if (!title || !description || !location || !date || !time) {
      if (!title) setTitleError('Title is required');
      if (!description) setDescriptionError('Description is required');
      if (!location) setLocationError('Location is required');
      if (!date) setDateError('Date is required');
      if (!time) setTimeError('Time is required');
      return;
    }

    try {
      const eventsRef = ref(db, 'events');
      await push(eventsRef, {
        title,
        description,
        location,
        date,
        time,
        ownerId: auth.currentUser.uid,
        createdAt: serverTimestamp(),
        favourite: false,
      });
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleDateConfirm = (selectedDate) => {
    setDate(moment(selectedDate).format('YYYY-MM-DD'));
    setDatePickerVisible(false);
  };

  const handleTimeConfirm = (selectedTime) => {
    setTime(moment(selectedTime).format('HH:mm'));
    setTimePickerVisible(false);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Create New Event',
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

        <TextInput
          label="Event Title"
          mode="outlined"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          error={!!titleError}
        />
        <HelperText type="error" visible={!!titleError}>
          {titleError}
        </HelperText>

        <TextInput
          label="Event Description"
          mode="outlined"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={3}
          style={styles.input}
          error={!!descriptionError}
        />
        <HelperText type="error" visible={!!descriptionError}>
          {descriptionError}
        </HelperText>

        <TextInput
          label="Event Location"
          mode="outlined"
          value={location}
          onChangeText={setLocation}
          style={styles.input}
          error={!!locationError}
        />
        <HelperText type="error" visible={!!locationError}>
          {locationError}
        </HelperText>

        <TouchableOpacity onPress={() => setDatePickerVisible(true)} style={styles.dateInput}>
          <Text style={styles.dateText}>
            {date ? moment(date).format('MMMM Do, YYYY') : 'Select Event Date'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTimePickerVisible(true)} style={styles.dateInput}>
          <Text style={styles.dateText}>
            {time ? moment(time, 'HH:mm').format('h:mm A') : 'Select Event Time'}
          </Text>
        </TouchableOpacity>

        <Button mode="contained" onPress={handleCreate} style={styles.button}>
          Create Event
        </Button>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          date={new Date()}
          onConfirm={handleDateConfirm}
          onCancel={() => setDatePickerVisible(false)}
        />

        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          date={new Date()}
          onConfirm={handleTimeConfirm}
          onCancel={() => setTimePickerVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
}
