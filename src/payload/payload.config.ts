import type { GenerateTitle } from '@payloadcms/plugin-seo/types'

import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import redirects from '@payloadcms/plugin-redirects'
import seo from '@payloadcms/plugin-seo'
import { HTMLConverterFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import * as dotenv from 'dotenv'
import path from 'path'
import { buildConfig } from 'payload/config'

import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import Users from './collections/Users'
import BeforeLogin from './components/BeforeLogin'

const generateTitle: GenerateTitle = () => {
    return 'Aide'
}

dotenv.config({
    path: path.resolve(__dirname, '../../.env'),
})

export default buildConfig({
    admin: {
        bundler: webpackBundler(),
        components: {
            // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
            // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
            beforeLogin: [BeforeLogin],
            // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
            // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
            beforeDashboard: [],
        },
        user: Users.slug,
        webpack: config => ({
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    dotenv: path.resolve(__dirname, './dotenv.js'),
                },
            },
        }),
    },
    collections: [Posts, Media, Users],
    cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
    csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
    db: mongooseAdapter({
        url: process.env.DATABASE_URI,
    }),
    editor: lexicalEditor({
      features: ({ defaultFeatures }) => [
        ...defaultFeatures,
        HTMLConverterFeature({}),
      ],
    }),
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
    plugins: [
        redirects({
            collections: ['posts'],
        }),
        seo({
            collections: ['posts'],
            generateTitle,
            uploadsCollection: 'media',
        }),
    ],
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
})
