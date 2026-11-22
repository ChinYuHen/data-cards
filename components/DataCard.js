/**
 * DataCard Component (100% Complete - Use As Is)
 *
 * Displays individual product card with:
 * - Emoji image
 * - Title
 * - Price
 * - Star rating
 * - Professional 44px minimum touch target
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';

export default function DataCard({ item, onPress }) {
  // Render star rating (visual representation)
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <View style={styles.starsContainer}>
        {/* Full stars */}
        {Array(fullStars).fill(0).map((_, i) => (
          <Text key={`full-${i}`} style={styles.star}>★</Text>
        ))}

        {/* Half star */}
        {hasHalfStar && <Text style={styles.star}>★</Text>}

        {/* Empty stars */}
        {Array(emptyStars).fill(0).map((_, i) => (
          <Text key={`empty-${i}`} style={styles.starEmpty}>★</Text>
        ))}

        <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress && onPress(item)}
      activeOpacity={0.7}
    >
      {/* Product Image (Emoji) */}
      <View style={styles.imageContainer}>
        <Text style={styles.imageEmoji}>{item.imageEmoji}</Text>
      </View>

      {/* Product Details */}
      <View style={styles.details}>
        {/* Category Badge */}
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>

        {/* Title */}
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        {/* Star Rating */}
        {renderStars(item.rating)}

        {/* Price */}
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    marginBottom: 16,
    width: '48%', // For 2-column grid
    minHeight: 240, // Ensures consistent card height
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    backgroundColor: colors.background,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageEmoji: {
    fontSize: 60,
  },
  details: {
    padding: 12,
  },
  categoryBadge: {
    backgroundColor: colors.primaryLight,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.primary,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 8,
    minHeight: 40, // Reserve space for 2 lines
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  star: {
    fontSize: 14,
    color: colors.star,
    marginRight: 2,
  },
  starEmpty: {
    fontSize: 14,
    color: colors.starEmpty,
    marginRight: 2,
  },
  ratingText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 6,
    fontWeight: '500',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
});
