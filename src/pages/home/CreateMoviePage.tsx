import { Form, Input, InputNumber, Button, Select, message } from 'antd';
import type { Movie } from '@/types/Movie';
import { createMovie } from '@/services/movieApi';

const { TextArea } = Input;
const { Option } = Select;

const CreateMoviePage = () => {
    const [form] = Form.useForm();

    const handleFinish = async (values: Movie) => {
        try {
            const formattedValues = {
                ...values,
                genre: values.genre.toString(),
            };
            console.log('Creating movie with data:', formattedValues);
            await createMovie(formattedValues);
            message.success('Movie created successfully!');
            form.resetFields();
        } catch (error) {
            message.error('Failed to create movie');
            console.error('Error creating movie:', error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">🎬 Create Movie</h2>

            <Form
                layout="vertical"
                form={form}
                onFinish={handleFinish}
                className="space-y-4"
            >
                {/* Title */}
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter the movie title',
                        },
                    ]}
                >
                    <Input className="rounded-md" />
                </Form.Item>

                {/* Genre */}
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
                    <Select
                        mode="multiple"
                        placeholder="Select genres"
                        className="rounded-md"
                    >
                        <Option value="Action">Action</Option>
                        <Option value="Drama">Drama</Option>
                        <Option value="Comedy">Comedy</Option>
                        <Option value="Horror">Horror</Option>
                    </Select>
                </Form.Item>

                {/* Release Year */}
                <Form.Item
                    label="Release Year"
                    name="releaseYear"
                    rules={[{ required: true, message: 'Enter release year' }]}
                >
                    <InputNumber
                        min={1900}
                        max={2100}
                        className="w-full rounded-md"
                    />
                </Form.Item>

                {/* Director */}
                <Form.Item
                    label="Director"
                    name="director"
                    rules={[{ required: true, message: 'Enter director name' }]}
                >
                    <Input className="rounded-md" />
                </Form.Item>

                {/* Description */}
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Enter a description' }]}
                >
                    <TextArea rows={3} className="rounded-md" />
                </Form.Item>

                {/* Poster URL */}
                <Form.Item
                    label="Poster URL"
                    name="posterUrl"
                    rules={[
                        { required: true, message: 'Enter poster URL' },
                        { type: 'url', message: 'Must be a valid URL' },
                    ]}
                >
                    <Input className="rounded-md" />
                </Form.Item>

                {/* Submit Button */}
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md"
                    >
                        Create Movie
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateMoviePage;
