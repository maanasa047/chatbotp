import ChatMessage from '../models/ChatMessage.js';

export const saveMessages = async (req, res) => {
  try {
    const userId = req.user.id;
    const { messages } = req.body;

    let chat = await ChatMessage.findOne({ userId });

    if (chat) {
      chat.messages = messages;
      chat.updatedAt = Date.now();
      await chat.save();
    } else {
      chat = new ChatMessage({ userId, messages });
      await chat.save();
    }

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save messages' });
  }
};

export const getMessages = async (req, res) => {
  try {
    const userId = req.user.id;

    const chat = await ChatMessage.findOne({ userId });
    res.json(chat ? chat.messages : []);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get messages' });
  }
};
