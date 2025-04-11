import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function EventCard({ event, onEdit, onDelete, onToggleFavourite, hideEdit }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Icon name="calendar" size={18} color="#007bff" />
        <Text style={styles.metaText}>{event.date}</Text>
      </View>

      <View style={styles.row}>
        <Icon name="clock" size={18} color="#007bff" />
        <Text style={styles.metaText}>{event.time || '—'}</Text>
      </View>

      <Text style={styles.title}>{event.title}</Text>

      <View style={styles.row}>
        <Icon name="map-pin" size={16} color="#555" />
        <Text style={styles.metaText}>{event.location}</Text>
      </View>

      <View style={styles.row}>
        <Icon name="align-left" size={16} color="#555" />
        <Text style={styles.description}>{event.description}</Text>
      </View>

      <View style={styles.buttonRow}>
        {!hideEdit && (
          <View style={styles.iconGroup}>
            <TouchableOpacity onPress={onEdit} style={styles.iconBtn}>
              <Icon name="edit-3" size={20} color="#007bff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete} style={styles.iconBtn}>
              <Icon name="trash-2" size={20} color="#e63946" />
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          onPress={() => onToggleFavourite && onToggleFavourite(event.id, event.favourite)}
          style={[styles.favButton, event.favourite && styles.favActive]}
        >
          <Icon
            name={event.favourite ? 'heart' : 'heart'}
            size={18}
            color={event.favourite ? '#fff' : '#e63946'}
          />
          <Text
            style={[
              styles.favText,
              event.favourite && { color: '#fff', marginLeft: 6 },
            ]}
          >
            {event.favourite ? 'Favourite' : 'Favourite'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginVertical: 6,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginLeft: 6,
    flex: 1,
    flexWrap: 'wrap',
  },
  metaText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 16,
  },
  iconBtn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
  },
  favButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fcebea',
  },
  favActive: {
    backgroundColor: '#e63946',
  },
  favText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#e63946',
    marginLeft: 6,
  },
});
