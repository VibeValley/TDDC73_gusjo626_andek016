import { Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { Link } from "expo-router";


import styles from "@/styles";

import LanguagePicker from "@/components/LanguagePicker";
import DatePicker from "@/components/DatePicker";
import RepoCard from "@/components/RepoCard"


interface Repository {
  full_name: string,
  name: string,
  description: string,
  id: number,
  stargazers_count: number,
  owner: {
    login: string,

  }
}



export default function Index() {
  const [repos, setRepos] = useState<Repository[]>([]);


  const fetchRepos = async (item: { label: string; value: string }) => {
    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=language:${item.label.toLowerCase()}&sort=stars&order=desc&per_page=10&page=1`);
      const data = await response.json();
      setRepos(data.items);
    } catch (error) {
      console.error("Earor fetching repos:", "error");
    }
  };

  return (
    <View
      style={styles.container}
    >
      <View style={styles.layoutContainer}>
        <Text
          style={styles.titleText}>GitHub Trending Repos
        </Text>
      </View>

      <View style={{ display: "flex", flexDirection: "row", gap: 15, padding: 20 }}>
        <LanguagePicker fetchData={fetchRepos} />
      </View>
      <ScrollView style={styles.repoCardContainer}>
        {repos.length > 0 ? (
          repos.map((repo) => (
            <RepoCard
              key={repo.id}
              repoTitle={repo.name}
              repoFullTitle={repo.full_name}
              description={repo.description}
              stars={repo.stargazers_count}
              user={repo.owner.login}
              id={repo.id}
            />

          ))
        ) : (
          <Text>Choose a language to see repos</Text>
        )}
      </ScrollView>
    </View>
  );
}
