import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Lab 2" }} // Set your desired title here
      />
    </Stack>
  );
}
