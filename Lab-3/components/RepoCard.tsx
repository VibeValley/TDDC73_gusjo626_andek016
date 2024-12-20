import { Text, View } from "react-native";
import styles from "@/styles";
import { Link } from "expo-router";

type props = {
  repoTitle: string,
  repoFullTitle: string,
  description: string,
  stars: number
  id: number,
  user: string,
}
export default function RepoCard({ repoTitle, repoFullTitle, description, stars, id, user }: props) {
  return (
    <Link href={`/detailPage/${id}`} style={{ marginBottom: 20 }}>
      <View style={styles.repoCard}>
        <View style={styles.repoCardHeader}>
          <Text style={{ fontSize: 24 }}>{repoTitle}</Text>
          <Text style={{ fontWeight: "bold" }}>⭐{stars}</Text>
        </View>
        <Text style={{ fontSize: 16, color: "gray" }}>{repoFullTitle}</Text>
        <View style={{ height: 80 }}>
          <Text style={{ fontSize: 16, marginTop: 20 }}>{description}</Text>
        </View>
      </View>
    </Link>
  );
}
