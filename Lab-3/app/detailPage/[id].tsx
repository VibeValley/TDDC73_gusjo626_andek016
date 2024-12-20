import { Pressable, Text, View } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import styles from "@/styles/detailedPage"


interface RepositoryDetails {
    full_name: string,
    name: string,
    description: string,
    id: number,
    stargazers_count: number,
    fork_count: number,
    owner: {
        login: string,

    }
}

export default function DetailedPage() {
    const { id } = useLocalSearchParams();
    const [repoData, setRepoData] = useState<any>(null);

    useEffect(() => {
        const fetchRepoData = async () => {
            try {
                const response = await fetch(`https://api.github.com/repositories/${id}`);
                const data = await response.json();
                setRepoData(data); // Set fetched data into state
                console.log(data.id);
            } catch (err) {
                console.error("Error fetching repo data:", err);
            }
        };
        fetchRepoData();
    }, [id]);

    if (!repoData) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (<>

        <View style={styles.container}>
            <Text style={{
                fontSize: 28, fontWeight: "bold"
            }}>{repoData.name}</Text>
            <Text style={{ marginTop: 5, }}>{repoData.description}</Text>
            <View style={{ marginTop: 20, flexDirection: "row", gap: 40 }}>
                <Text >⭐ {repoData.stargazers_count}</Text>
                <Text >🍴 {repoData.forks_count}</Text>
            </View>
            <View style={{ marginTop: 20, flexDirection: "row", gap: 40 }}>
                <Text >📦 {repoData.stargazers_count}</Text>
                <Text >🌿 {repoData.forks_count}</Text>
            </View>
            <Text>Owner: {repoData.owner.login}</Text>
        </View>
        <Link href="/" style={styles.buttonStyle}>
            <View style={{ justifyContent: "center", alignItems: "center", width: "100%", height: "100%", transform: [{ translateX: -50 }], }} >
                <Text style={{ color: "white" }}>Go Back</Text>
            </View>
        </Link>
    </>
    );
}
