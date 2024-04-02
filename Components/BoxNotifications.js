export default function BoxNotifications() {
    return (
        <>
            <Text>This is box notifications</Text>
            <Button
                title="Go to List View"
                onPress={() =>
                    navigation.navigate('notification-listview' )
                }
            />
        </>
    );
};

