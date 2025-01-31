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
