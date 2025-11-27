import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import { styles } from "./style";

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (comment: string) => void;
}

export const CommentModal = ({ isOpen, onClose, onSubmit }: CommentModalProps) => {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!comment.trim()) return;
    onSubmit(comment);
    setComment("");
    onClose();
  };

  return (
    <Modal visible={isOpen} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Adicionar Comentário</Text>
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.textarea}
            placeholder="Digite seu comentário..."
            value={comment}
            onChangeText={setComment}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
