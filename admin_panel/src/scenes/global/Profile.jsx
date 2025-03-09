import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Avatar, 
  Button, 
  TextField, 
  Grid, 
  Paper, 
  useTheme 
} from '@mui/material';
import { tokens } from '../../theme';

const ProfilePage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Sample user data (you would typically fetch this from your backend)
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Software Developer | Tech Enthusiast',
    location: 'San Francisco, CA',
    profilePicture: '/path/to/default/profile/pic.jpg' // Replace with actual path
  });

  // Edit mode state
  const [isEditing, setIsEditing] = useState(false);

  // Temporary state for editing
  const [editData, setEditData] = useState({ ...userData });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUserData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(userData);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Box 
      sx={{ 
        flexGrow: 1, 
        p: 3,
        backgroundColor: colors.primary[500],
        minHeight: '100vh'
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              borderRadius: 2,
              backgroundColor: colors.primary[400]
            }}
          >
            <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
              <Avatar
                alt={userData.name}
                src={userData.profilePicture}
                sx={{ 
                  width: 150, 
                  height: 150, 
                  mb: 2,
                  border: `4px solid ${colors.greenAccent[500]}`
                }}
              />
              {isEditing ? (
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={editData.name}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              ) : (
                <Typography variant="h3" color={colors.grey[100]}>
                  {userData.name}
                </Typography>
              )}
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {isEditing ? (
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={editData.email}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                ) : (
                  <Typography variant="body1" color={colors.grey[200]}>
                    <strong>Email:</strong> {userData.email}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                {isEditing ? (
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={editData.location}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                ) : (
                  <Typography variant="body1" color={colors.grey[200]}>
                    <strong>Location:</strong> {userData.location}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                {isEditing ? (
                  <TextField
                    fullWidth
                    label="Bio"
                    name="bio"
                    multiline
                    rows={4}
                    value={editData.bio}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                ) : (
                  <Typography variant="body1" color={colors.grey[200]}>
                    <strong>Bio:</strong> {userData.bio}
                  </Typography>
                )}
              </Grid>
            </Grid>

            <Box mt={3} display="flex" justifyContent="center" gap={2}>
              {isEditing ? (
                <>
                  <Button 
                    variant="contained" 
                    color="success" 
                    onClick={handleSave}
                  >
                    Save Changes
                  </Button>
                  <Button 
                    variant="contained" 
                    color="error" 
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={handleEdit}
                >
                  Edit Profile
                </Button>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;