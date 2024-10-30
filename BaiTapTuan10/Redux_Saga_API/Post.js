import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Posts = () => {
        const dispatch = useDispatch();
        const { posts, loading, error } = useSelector(state => state.posts);
        const [newPost, setNewPost] = useState({ title: '', body: '' });

        useEffect(() => {
            dispatch({ type: 'FETCH_POSTS_REQUEST' });
        }, [dispatch]);

        const handleCreatePost = () => {
            dispatch({ type: 'CREATE_POST_REQUEST', payload: newPost });
            setNewPost({ title: '', body: '' });
        };

        const handleDeletePost = (id) => {
            dispatch({ type: 'DELETE_POST_REQUEST', payload: id });
        };

        return ( <
            View > {
                loading && < Text > Loading... < /Text>} {
                error && < Text > { error } < /Text>} <
                FlatList
                data = { posts }
                keyExtractor = {
                    (item) => item.id.toString()
                }
                renderItem = {
                    ({ item }) => ( <
                        View >
                        <
                        Text > { item.title } < /Text> <
                        Button title = "Delete"
                        onPress = {
                            () => handleDeletePost(item.id)
                        }
                        /> < /
                        View >
                    )
                }
                /> <
                TextInput
                placeholder = "Title"
                value = { newPost.title }
                onChangeText = {
                    (text) => setNewPost({...newPost, title: text })
                }
                /> <
                TextInput
                placeholder = "Body"
                value = { newPost.body }
                onChangeText = {
                    (text) => setNewPost({...newPost, body: text })
                }
                /> <
                Button title = "Create Post"
                onPress = { handleCreatePost }
                /> < /
                View >
            );
        };

        export default Posts;