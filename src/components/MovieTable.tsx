// src/components/MovieTable.tsx
import React from 'react';
import type { Movie } from '@/types/Movie';
import { Table, Tag, Image, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { deleteMovie } from '@/services/movieApi';

interface Props {
    movies: Movie[];
}

const MovieTable: React.FC<Props> = ({ movies }) => {
    const navigate = useNavigate();

    const handleDelete = (id: number) => {
        deleteMovie(id.toString())
            .then(() => {
                message.success('Movie deleted successfully');
                // Optionally, you can refresh the movie list here
            })
            .catch((error) => {
                console.error('Error deleting movie:', error);
                message.error('Failed to delete movie');
            });
    };

    const columns = [
        {
            title: 'Poster',
            dataIndex: 'posterUrl',
            key: 'posterUrl',
            render: (url: string) => <Image width={80} src={url} alt="poster" />,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Genres',
            dataIndex: 'genre',
            key: 'genre',
            render: (genres: string[]) => (
                <>
                    {genres.map((g) => (
                        <Tag color="blue" key={g}>
                            {g}
                        </Tag>
                    ))}
                </>
            ),
        },
        {
            title: 'Release Year',
            dataIndex: 'releaseYear',
            key: 'releaseYear',
        },
        {
            title: 'Director',
            dataIndex: 'director',
            key: 'director',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            ellipsis: true,
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: unknown, record: Movie) => (
                <span>
                    <Button type="link" onClick={() => navigate(`/edit-movie/${record.id}`)}>
                        Edit
                    </Button>
                    <Button type="link" danger onClick={() => handleDelete(record.id)}>
                        Delete
                    </Button>
                </span>
            ),
        },
    ];

    return <Table rowKey="id" dataSource={movies} columns={columns} pagination={{ pageSize: 10 }} />;
};

export default MovieTable;
