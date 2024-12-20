import { StyleSheet, Platform } from "react-native"

const styles = StyleSheet.create(
    {
        container: {
        },
        layoutContainer: {
            width: "100%",
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
        },
        titleText: {
            fontSize: 26,
            fontWeight: "800"
        },
        progLanguageContainer: {
            display: "flex",
            gap: 15,
        },
        dropdown: {
            width: 150,
            height: 50,
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 8,
            paddingHorizontal: 8,
            backgroundColor: "white",
        },
        repoCardContainer: {
            gap: 20,
            width: "100%",
            paddingHorizontal: 20,
        },
        repoCard: {
            marginBottom: 20,
            display: "flex",
            flexDirection: "column",
            padding: 10,
            borderColor: "red",
            height: 150,
            width: "100%",
            zIndex: 2,
            borderRadius: 8,
            backgroundColor: "white",
            ...Platform.select({
                ios: {
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                },
                android: {
                    elevation: 10,
                },
            }),
        },
        repoCardHeader: {
            display: "flex",
            flexDirection: "row",
            paddingRight: 1,
            justifyContent: "space-between",
            alignItems: "center"

        }

    }
)

export default styles;