<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the Ionicons library
import styles from './styles';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  const addTask = () => {
    if (taskTitle.trim() !== '') {
      const newTask = { id: Math.random().toString(), title: taskTitle, status: 'Due' };
      setTasks([...tasks, newTask]);
      setTaskTitle('');
    }
  };

  const toggleStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: task.status === 'Due' ? 'Done' : 'Due' }
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={taskTitle}
        onChangeText={setTaskTitle}
        placeholder="Enter task"
      />

      <Button
        title="Add Task"
        onPress={addTask}
        disabled={taskTitle.trim() === ''}
      />

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>{item.title}</Text>

            <View style={styles.statusContainer}>
              <Text>Status: {item.status}</Text>
              <Switch
                value={item.status === 'Done'}
                onValueChange={() => toggleStatus(item.id)}
              />
            </View>

            {/* Replace Text with Icon for delete */}
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Icon name="trash-bin" size={30} color="red" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default App;
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> 38648e791fd1a27b9454c80663a183580ec17c89
