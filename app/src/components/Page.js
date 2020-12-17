import React, { useState, useEffect } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Text, View, ScrollView } from "react-native";
import api from "../services/api";
import AppLoading from "expo-app-loading";

export default function Page({ content }) {
  const [posts, setPosts] = useState([]);

  const getposts = async () => {
    try {
      const response = await api.get("posts");
      setPosts(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getposts();
  }, []);

  if (posts.length == 0) return <AppLoading />;

  return (
    <View style={{ flex: 1, flexDirection: "column", paddingTop: 30 }}>
      <ScrollView>
        {content.map((item) => {
          const postsByCategory = posts.filter(
            (post) => item.properties.categories.indexOf(post.category) > -1
          );

          return (
            <>
              <View
                key={item.title}
                style={{
                  backgroundColor: "#c0c0c0",
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 20,
                  }}
                >
                  {item.title}
                </Text>
              </View>

              {postsByCategory.map((post) => (
                <View
                  key={post.title}
                  style={{
                    padding: 8,
                    flexDirection: "row",
                    width: "95%",
                  }}
                >
                  <FontAwesome
                    name={"institution"}
                    color={"black"}
                    size={30}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={{
                      color: "black",
                      fontSize: 15,
                    }}
                  >
                    {post.title}
                  </Text>
                </View>
              ))}
            </>
          );
        })}
      </ScrollView>
    </View>
  );
}
