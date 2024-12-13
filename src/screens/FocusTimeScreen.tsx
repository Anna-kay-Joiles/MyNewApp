import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CountdownScreen = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Set initial time (60 seconds)
  const [isCounting, setIsCounting] = useState(false); // Control the countdown state

  // Use useRef to persist interval across renders
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Start countdown when `isCounting` becomes true
    if (isCounting && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else {
      // Clear the interval when countdown is paused or finished
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    // Cleanup the interval when component unmounts or isCounting/state changes
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isCounting, timeLeft]);

  // Handle start/stop countdown
  const toggleCountdown = () => {
    setIsCounting(prev => !prev);
  };

  // Reset the countdown
  const resetCountdown = () => {
    setTimeLeft(60);
    setIsCounting(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{timeLeft}s</Text>
      <Button title={isCounting ? "Pause" : "Start"} onPress={toggleCountdown} />
      <Button title="Reset" onPress={resetCountdown} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default CountdownScreen;
