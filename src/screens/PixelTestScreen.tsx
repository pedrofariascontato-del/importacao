import React, { useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { trackPixelEvent } from "../utils/facebook-pixel";
import {
  trackInteresseViagem,
  trackCadastroFormulario,
  trackZavenoLead,
} from "../utils/zaveno-tracking";

export function PixelTestScreen() {
  const [status, setStatus] = useState<string[]>([]);
  const [pixelId, setPixelId] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // Verificar se as credenciais estão carregadas
    const id = "2671738819859416";
    const token = "EAAUTMl9TE88BQEZBdK336WubrQ9Rk1HyhgPUHCZCoNkGdcNX49OZAXZB94tI4ABCRcmwccxBsLsm2buCuU6QKeyJZBR0gtVkXZAmXRKV6kWeZBqIXR6V5OVtZCEoGFYwMn1hcJeJdomXRLBWF3yuZBEjLjvIc9Tt9s21sPDObU7PjS8NzJkc3TZB21q1M47nYZCN6IElAZDZD";

    setPixelId(id);
    setAccessToken(token.substring(0, 20) + "...");

    addStatus(`Pixel ID: ${id}`);
    addStatus(`Access Token: ${token.substring(0, 20)}...`);
    addStatus("Credentials loaded ✅");
  }, []);

  const addStatus = (message: string) => {
    setStatus((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const testPageView = async () => {
    addStatus("Testing PageView...");
    try {
      const result = await trackPixelEvent("PageView", {
        content_name: "Test Page",
      });
      addStatus(`PageView result: ${result ? "SUCCESS ✅" : "FAILED ❌"}`);
    } catch (error: any) {
      addStatus(`PageView error: ${error.message}`);
    }
  };

  const testLead = async () => {
    addStatus("Testing Lead event...");
    try {
      const result = await trackPixelEvent("Lead", {
        content_name: "Test Lead",
      });
      addStatus(`Lead result: ${result ? "SUCCESS ✅" : "FAILED ❌"}`);
    } catch (error: any) {
      addStatus(`Lead error: ${error.message}`);
    }
  };

  const testZavenoLead = async () => {
    addStatus("Testing Zaveno Lead...");
    try {
      const result = await trackInteresseViagem("Test Screen");
      addStatus(`Zaveno Lead result: ${result ? "SUCCESS ✅" : "FAILED ❌"}`);
    } catch (error: any) {
      addStatus(`Zaveno Lead error: ${error.message}`);
    }
  };

  const testFormLead = async () => {
    addStatus("Testing Form Lead...");
    try {
      const result = await trackCadastroFormulario({
        nome: "Test User",
        email: "test@example.com",
        telefone: "+5511999999999",
      });
      addStatus(`Form Lead result: ${result ? "SUCCESS ✅" : "FAILED ❌"}`);
    } catch (error: any) {
      addStatus(`Form Lead error: ${error.message}`);
    }
  };

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <Text className="text-white text-2xl font-bold mb-4">
        Facebook Pixel Test
      </Text>

      <View className="bg-gray-800 p-4 rounded-lg mb-4">
        <Text className="text-white text-sm mb-2">Configuration:</Text>
        <Text className="text-green-400 text-xs mb-1">Pixel ID: {pixelId}</Text>
        <Text className="text-green-400 text-xs">Token: {accessToken}</Text>
      </View>

      <View className="flex-row flex-wrap gap-2 mb-4">
        <Pressable
          onPress={testPageView}
          className="bg-blue-600 px-4 py-3 rounded-lg"
        >
          <Text className="text-white font-semibold">Test PageView</Text>
        </Pressable>

        <Pressable
          onPress={testLead}
          className="bg-green-600 px-4 py-3 rounded-lg"
        >
          <Text className="text-white font-semibold">Test Lead</Text>
        </Pressable>

        <Pressable
          onPress={testZavenoLead}
          className="bg-purple-600 px-4 py-3 rounded-lg"
        >
          <Text className="text-white font-semibold">Test Zaveno Lead</Text>
        </Pressable>

        <Pressable
          onPress={testFormLead}
          className="bg-orange-600 px-4 py-3 rounded-lg"
        >
          <Text className="text-white font-semibold">Test Form Lead</Text>
        </Pressable>

        <Pressable
          onPress={() => setStatus([])}
          className="bg-red-600 px-4 py-3 rounded-lg"
        >
          <Text className="text-white font-semibold">Clear Log</Text>
        </Pressable>
      </View>

      <Text className="text-white text-lg font-bold mb-2">Log:</Text>
      <ScrollView className="flex-1 bg-black rounded-lg p-3">
        {status.map((msg, index) => (
          <Text key={index} className="text-green-400 text-xs mb-1 font-mono">
            {msg}
          </Text>
        ))}
        {status.length === 0 && (
          <Text className="text-gray-500 text-sm">No logs yet. Click a button to test.</Text>
        )}
      </ScrollView>
    </View>
  );
}
