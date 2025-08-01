import { Text, View } from "react-native";
import { Link, useLoader } from 'expo-router';

export async function loader() {
  return Promise.resolve({
    foo: 'bar',
  });
}

export default function Index() {
  const data = useLoader(loader);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text testID="loader-result">{JSON.stringify(data)}</Text>

      <Link href="/posts/1">
        <Text>Go to Post 1</Text>
      </Link>
    </View>
  );
}
