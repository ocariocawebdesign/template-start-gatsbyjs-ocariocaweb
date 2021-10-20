/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: 'Site Gatsby O Carioca',
    siteUrl: 'https://www.ocariocaweb.com',
    description: 'Site de desenvolvimento Carioca Web',

    social: [{
        name: 'github',
        url: 'https://github.com/ocariocawebdesign',
      },
      {
        nome: 'linkedin',
        url: 'https://www.linkedin.com/in/ocariocawebdesign/',
      },

    ],

  },
  plugins: [

    `gatsby-plugin-react-helmet`,

    `gatsby-plugin-sitemap`,

    /*{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name:'O Carioca Web',
        short_name:'O Carioca Web',
        background_color:'#fff',
        theme_color:`#440055`,
        // Setting a color is optional.
       display:'standalone',
       icon:'src/img/monster.png',
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
*/
    //-------------

    //-----------


    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,

      },
    },


    //-----------
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here

        //displayName: process.env.NODE_ENV == 'production' ? true : false, 
      },
    },

    //-----------


    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.example.com`,
      },
    },

    //-----------

    //-----------



    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        /*Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
        // defaults to false
        enableWebVitalsTracking: true,*/
      },
    },

    /*-----------------------------------*/



    /*-----------------------------*/

    // `gatsby-plugin-offline`,


  ]
}