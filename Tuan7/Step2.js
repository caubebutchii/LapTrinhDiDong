import React, { useEffect, useState } from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    TextInput,
} from 'react-native';

const Item = ({ item, onSelect, onUpdate }) => (
    <TouchableOpacity
        style={{
            width: '100%',
        }}
        onPress={() => onSelect(item)}>
        <View
            style={{
                height: 80,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: item.id === 1 ? '#fff' : 'none',
                paddingRight: 14,
            }}>
            <View
                style={{
                    justifyContent: 'flex-start',
                    height: 80,
                }}>
                <Text
                    style={{
                        fontSize: 13,
                        top: 4,
                    }}>
                    {item.name}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                    }}>
                    <Text
                        style={{
                            color: 'red',
                            top: 10,
                            fontSize: 12,
                            color: '#7D5B5B',
                        }}>
                        Price
                    </Text>

                    <TouchableOpacity>
                        <Text
                            style={{
                                color: 'red',
                                top: 10,
                                fontSize: 12,
                                color: '#FF0E0E',
                                marginLeft: 4,
                            }}>
                            {item.price}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{}}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#F31111',
                        width: 80,
                        height: 34,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => onUpdate(item.id)}>
                    <Text
                        style={{
                            color: '#fff',
                        }}>
                        Update
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

        <View
            style={{
                height: 1,
                width: '100%',
                backgroundColor: '#C4C4C4',
            }}></View>
    </TouchableOpacity>
);

export default function App() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [img, setImage] = useState('');
    const [data, setData] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const fetchData = () => {
        fetch('https://66fd0107c3a184a84d18b0b1.mockapi.io/products2')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const addItem = () => {
        fetch('https://66fd0107c3a184a84d18b0b1.mockapi.io/products2', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                price: price,
                image: img,
            }),
        })
            .then((response) => response.json())
            .then((newItem) => {
                setData((prevData) => [...prevData, newItem]);
            });
    };

    const updateItem = (id) => {
        fetch(`https://66fd0107c3a184a84d18b0b1.mockapi.io/products2/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                price: price,
                image: img,
            }),
        })
            .then((response) => response.json())
            .then((updatedItem) => {
                setData((prevData) =>
                    prevData.map((item) => (item.id === id ? updatedItem : item))
                );
            });
    };

    const handleItemPress = (item) => {
        setName(item.name);
        setPrice(item.price);
        setImage(item.image);
        setSelectedItemId(item.id);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    margin: 10,
                }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#F31111',
                        width: 100,
                        height: 34,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={addItem}>
                    <Text
                        style={{
                            color: '#fff',
                        }}>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TextInput
                    style={{
                        width: 118,
                        height: 33,
                        marginTop: 10,
                        backgroundColor: '#FFFFFF',
                        fontSize: 20,
                        fontWeight: '700',
                        fontFamily: 'Roboto',
                        lineHeight: 23.44,
                        textAlign: 'right',
                    }}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                <TextInput
                    style={{
                        width: 118,
                        height: 33,
                        marginTop: 10,
                        backgroundColor: '#FFFFFF',
                        fontSize: 20,
                        fontWeight: '700',
                        fontFamily: 'Roboto',
                        lineHeight: 23.44,
                        textAlign: 'right',
                    }}
                    keyboardType="numeric"
                    value={price.toString()}
                    onChangeText={(text) => setPrice(Number(text))}
                />

                <TextInput
                    style={{
                        width: 118,
                        height: 33,
                        marginTop: 10,
                        backgroundColor: '#FFFFFF',
                        fontSize: 20,
                        fontWeight: '700',
                        fontFamily: 'Roboto',
                        lineHeight: 23.44,
                        textAlign: 'right',
                    }}
                    value={img}
                    onChangeText={(text) => setImage(text)}
                />
            </View>
            <ScrollView
                style={{
                    width: '100%',
                }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <Item item={item} onSelect={handleItemPress} onUpdate={updateItem} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#ecf0f1',
        padding: 8,
        alignItems: 'center',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
