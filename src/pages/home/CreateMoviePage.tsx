import { Form, Input, InputNumber, Button, Select, message } from 'antd';
import type { Movie } from '@/types/Movie';
import { createMovie } from '@/services/movieApi';

const { TextArea } = Input;
const { Option } = Select;

const CreateMoviePage = () => {
    const [form] = Form.useForm();

    const handleFinish = async (values: Movie) => {
        try {
            createMovie(values);
            message.success('Movie created successfully!');
            form.resetFields();
        } catch (error) {
            message.error('Failed to create movie');
            console.error('Error creating movie:', error);
        }
    };

    return (
        <Form layout="vertical" form={form} onFinish={handleFinish}>
            <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter the movie title' }]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="Genre"
                name="genre"
                rules={[{ required: true, message: 'Please select at least one genre' }]}
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

            <Form.Item label="Director" name="director" rules={[{ required: true, message: 'Enter director name' }]}>
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
                    Create Movie
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CreateMoviePage;
