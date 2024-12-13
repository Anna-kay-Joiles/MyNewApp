import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CountdownScreen = () => {
  const [timeLeft, setTimeLeft] = useState(60); 
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
