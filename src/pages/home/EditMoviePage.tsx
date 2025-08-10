// src/pages/edit/[id].tsx  (hoặc edit/index.tsx nếu dùng params)
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, InputNumber, Button, Select, message } from 'antd';
import type { Movie } from '@/types/Movie';
import { updateMovie, fetchMovieById } from '@/services/movieApi';

const { TextArea } = Input;
const { Option } = Select;

const EditMoviePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [form] = Form.useForm();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovieById(id as string);
                setMovie(data);
                form.setFieldsValue(data);
            } catch (err) {
                console.error('Lỗi khi fetch movie:', err);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    const handleUpdate = async (updatedMovie: Movie) => {
        try {
            console.log(updatedMovie);
            const formattedValues = {
                ...updatedMovie,
                genre: updatedMovie.genre.toString(),
            };
            await updateMovie(id as string, formattedValues);
            message.success('Cập nhật phim thành công!');
            navigate('/');
        } catch (err) {
            console.error('Lỗi cập nhật:', err);
            message.error('Lỗi khi cập nhật phim');
        }
        navigate('/');
    };

    if (!movie) return <div>Loading...</div>;

    return (
        <Form layout="vertical" form={form} onFinish={handleUpdate}>
            <Form.Item
                label="Title"
                name="title"
                rules={[
                    { required: true, message: 'Please enter the movie title' },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Genre"
                name="genre"
                rules={[
                    {
                        required: true,
                        message: 'Please select at least one genre',
                    },
                ]}
            >
                <Select mode="multiple" placeholder="Select genres">
                    <Option value="Action">Action</Option>
                    <Option value="Drama">Drama</Option>
                    <Option value="Comedy">Comedy</Option>
                    <Option value="Horror">Horror</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Release Year"
                name="releaseYear"
                rules={[{ required: true, message: 'Enter release year' }]}
            >
                <InputNumber min={1900} max={2100} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                label="Director"
                name="director"
                rules={[{ required: true, message: 'Enter director name' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Enter a description' }]}
            >
                <TextArea rows={3} />
            </Form.Item>

            <Form.Item
                label="Poster URL"
                name="posterUrl"
                rules={[
                    { required: true, message: 'Enter poster URL' },
                    { type: 'url', message: 'Must be a valid URL' },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Update Movie
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EditMoviePage;
