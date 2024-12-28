import React from 'react';
import { Box, Container, Typography, Link, Stack, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#191919', color: 'white', py: 4 }}>
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={4}
                    justifyContent="space-between"
                    alignItems="center"
                    text="center"
                >
                    {/* Left Section */}
                    <Box>
                        <Typography variant="h6" color="warning" fontWeight="bold">
                            Ridan Express
                        </Typography>
                        <Typography variant="body2"  mt={1}>
                            © {new Date().getFullYear()} All Rights Reserved.
                        </Typography>
                    </Box>

                    {/* Social Media Icons */}
                    <Stack direction="row" spacing={2}>
                        <IconButton href="#" color="warning">
                            <Facebook />
                        </IconButton>
                        <IconButton href="#" color="warning">
                            <Twitter />
                        </IconButton>
                        <IconButton href="#" color="warning">
                            <Instagram />
                        </IconButton>
                        <IconButton href="#" color="warning">
                            <LinkedIn />
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
