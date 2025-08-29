interface Participants {
    id: string;
    name: string;
    avatar: string;
}

export interface mockDataType {
    id: number;
    name: string;
    category: string;
    status: 'active' | 'deactive';
    description: string;
    participants: Participants[];
    maxParticipants: number;
    createdAt: string;
    lastActivity: string;
}
export const mockData: mockDataType[] = [
    {
        id: 0,
        name: "Gaming Lounge",
        category: "Gaming",
        status: "active",
        description: "Casual gaming chat for friends and fellow gamers",
        participants: [
            { id: "u1", name: "Alex", avatar: "https://i.pravatar.cc/150?img=1" },
            { id: "u2", name: "Sara", avatar: "https://i.pravatar.cc/150?img=2" }
        ],
        maxParticipants: 4,
        createdAt: "2025-08-27T15:00:00Z",
        lastActivity: "30m ago"
    },
    {
        id: 1,
        name: "Tech Talk",
        category: "Tech",
        status: "active",
        description: "Discuss the latest in technology and software development",
        participants: [
            { id: "u3", name: "Tom", avatar: "https://i.pravatar.cc/150?img=3" }
        ],
        maxParticipants: 4,
        createdAt: "2025-08-27T16:00:00Z",
        lastActivity: "10m ago"
    },
    {
        id: 2,
        name: "English Practice",
        category: "Education",
        status: "active",
        description: "Improve your English skills with casual conversation",
        participants: [
            { id: "u4", name: "Maria", avatar: "https://i.pravatar.cc/150?img=4" },
            { id: "u5", name: "John", avatar: "https://i.pravatar.cc/150?img=5" },
            { id: "u6", name: "Liam", avatar: "https://i.pravatar.cc/150?img=6" }
        ],
        maxParticipants: 4,
        createdAt: "2025-08-27T14:30:00Z",
        lastActivity: "5m ago"
    },
    {
        id: 3,
        name: "Movie Night",
        category: "Movies",
        status: "active",
        description: "Talk about the latest blockbusters and classic films",
        participants: [
            { id: "u7", name: "Ella", avatar: "https://i.pravatar.cc/150?img=7" },
            { id: "u8", name: "Chris", avatar: "https://i.pravatar.cc/150?img=8" }
        ],
        maxParticipants: 4,
        createdAt: "2025-08-27T12:00:00Z",
        lastActivity: "1h ago"
    },
    {
        id: 4,
        name: "Music Vibes",
        category: "Music",
        status: "active",
        description: "Share your favorite tracks and discover new artists",
        participants: [
            { id: "u9", name: "Nina", avatar: "https://i.pravatar.cc/150?img=9" }
        ],
        maxParticipants: 4,
        createdAt: "2025-08-27T18:00:00Z",
        lastActivity: "2m ago"
    },
    {
        id: 5,
        name: "Casual Hangout",
        category: "Social",
        status: "active",
        description: "Relax and chat with new people from around the world",
        participants: [
            { id: "u10", name: "Leo", avatar: "https://i.pravatar.cc/150?img=10" },
            { id: "u11", name: "Sophia", avatar: "https://i.pravatar.cc/150?img=11" },
            { id: "u12", name: "David", avatar: "https://i.pravatar.cc/150?img=12" },
            { id: "u13", name: "Emma", avatar: "https://i.pravatar.cc/150?img=13" }
        ],
        maxParticipants: 4,
        createdAt: "2025-08-27T13:00:00Z",
        lastActivity: "15m ago"
    }
];
