import React, { useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import { ref, update } from 'firebase/database';
import { db, auth } from '../../../firebase';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { TextInput, HelperText, Button } from 'react-native-paper';
import styles from "./styles";

export default function EditEventScreen({ route, navigation }) {
  const { event } = route.params;
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [location, setLocation] = useState(event.location);
  const [date, setDate] = useState(event.date);
  const [time, setTime] = useState(event.time || '');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');

  const handleUpdate = async () => {
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
      const eventRef = ref(db, `events/${event.id}`);
      await update(eventRef, {
        title,
        description,
        location,
        date,
        time,
      });
      Alert.alert('Success', 'Event updated successfully');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Update Failed', error.message);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Edit Event',
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
        <Text style={styles.title}>Edit Event</Text>

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
          label="Description"
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
          label="Location"
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

        <Button mode="contained" onPress={handleUpdate} style={styles.updateButton}>
          Update Event
        </Button>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          date={new Date()}
          onConfirm={(selectedDate) => {
            setDate(moment(selectedDate).format('YYYY-MM-DD'));
            setDatePickerVisible(false);
          }}
          onCancel={() => setDatePickerVisible(false)}
        />

        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          date={new Date()}
          onConfirm={(selectedTime) => {
            setTime(moment(selectedTime).format('HH:mm'));
            setTimePickerVisible(false);
          }}
          onCancel={() => setTimePickerVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
}