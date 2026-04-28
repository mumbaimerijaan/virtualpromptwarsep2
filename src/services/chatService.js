import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { getDb } from '../lib/firebase';

export const subscribeToChatMessages = (sessionId, callback) => {
  const db = getDb();
  const messagesRef = collection(db, `chats/${sessionId}/messages`);
  const q = query(messagesRef, orderBy('createdAt', 'asc'));

  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(messages);
  }, (error) => {
    console.error("Firestore subscription error:", error);
  });
};

export const saveMessageToFirestore = async (sessionId, messageData) => {
  const db = getDb();
  const messagesRef = collection(db, `chats/${sessionId}/messages`);
  
  return await addDoc(messagesRef, {
    ...messageData,
    createdAt: serverTimestamp()
  });
};
