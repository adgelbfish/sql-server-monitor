const config = {
    listenPort: 3000,
    databases: [
        {
            endpointName: "/exampledb",
            connectionString: 'Server=localhost,1433;Database=database;User Id=username;Password=password;Encrypt=true'
        }
    ]
};

export default config