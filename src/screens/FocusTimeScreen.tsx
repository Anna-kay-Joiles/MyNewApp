import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CountdownScreen = () => {
  const [timeLeft, setTimeLeft] = useState(60 * 60); 
  const [isCounting, setIsCounting] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isCounting && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isCounting, timeLeft]);

  const toggleCountdown = () => {
    setIsCounting(prev => !prev);
  };

  const resetCountdown = () => {
    setTimeLeft(60 * 60); 
    setIsCounting(false);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.timerBlock}>
        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
        <View style={styles.buttonContainer}>
          <Button title={isCounting ? "Pause" : "Start"} onPress={toggleCountdown} />
          <Button title="Reset" onPress={resetCountdown} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  timerBlock: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});

export default CountdownScreen;
