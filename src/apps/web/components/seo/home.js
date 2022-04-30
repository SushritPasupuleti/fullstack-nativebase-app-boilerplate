import { NextSeo } from 'next-seo';

export default function HomeSEO() {

    return (
        <>
            <NextSeo
                title="The One Boilerplate"
                description="One Boilerplate to Build them all, One Boilerplate to scale them, One Boilerplate to bring them (users) all and in the darkness onboard them."
                canonical="https:/www.yoururl.com/"
                openGraph={{
                    url: 'https:/www.yoururl.com/',
                    title: 'Open Graph Title',
                    description: 'Open Graph Description',
                    images: [
                        {
                            url: 'https://www.example.ie/og-image-01.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                            type: 'image/jpeg',
                        },
                        {
                            url: 'https://www.example.ie/og-image-02.jpg',
                            width: 900,
                            height: 800,
                            alt: 'Og Image Alt Second',
                            type: 'image/jpeg',
                        },
                        { url: 'https://www.example.ie/og-image-03.jpg' },
                        { url: 'https://www.example.ie/og-image-04.jpg' },
                    ],
                    site_name: 'The One Boilerplate',
                }}
                twitter={{
                    handle: '@sushrit_lawliet',
                    site: '@sushrit_lawliet',
                    cardType: 'summary_large_image',
                }}
            />
        </>
    )
};