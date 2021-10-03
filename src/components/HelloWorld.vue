<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
        <v-btn class="primary" rounded>TEST BUTTON</v-btn>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a v-for="(next, i) in whatsNext" :key="i" :href="next.href" class="subheading mx-3" target="_blank">
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a v-for="(link, i) in importantLinks" :key="i" :href="link.href" class="subheading mx-3" target="_blank">
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a v-for="(eco, i) in ecosystem" :key="i" :href="eco.href" class="subheading mx-3" target="_blank">
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
      <v-col>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, doloremque non veniam ipsa alias ut quas
        architecto ad, tempora explicabo ullam mollitia, sint saepe quaerat eius? Nisi accusantium optio iusto,
        assumenda, aliquam temporibus similique ullam labore dolores, amet nesciunt! Quasi amet unde nulla, dolores
        optio exercitationem eaque ipsam adipisci perferendis similique. Placeat magni quis, enim quia aperiam itaque!
        Veritatis neque assumenda vitae ea dolores. Quasi, repellendus vitae magni ut consequatur maxime tempore optio
        perspiciatis reiciendis nisi enim commodi error dolorem earum sit corrupti et. Inventore in nostrum ipsa
        distinctio quidem facere! Amet laboriosam a excepturi reiciendis nemo ipsa earum blanditiis similique ex
        perferendis praesentium, unde nostrum, temporibus quia autem eaque ducimus fugiat quaerat non repellat animi
        pariatur ipsam molestias. Tenetur aliquid ullam earum dolorem placeat, aperiam, veniam amet nihil delectus
        perspiciatis officiis reprehenderit unde! Dolorem adipisci nostrum iusto. Laboriosam dolorem odit autem eos
        suscipit illum, libero asperiores hic cumque consequuntur quod consequatur! Eveniet vel accusantium, possimus
        id, itaque dignissimos, ad exercitationem assumenda dolor totam expedita sequi eius aperiam inventore similique
        quasi! Accusantium earum cum incidunt, harum molestias sed. Excepturi dolores quae suscipit autem incidunt, ipsa
        omnis non est at necessitatibus eum? Delectus in corrupti omnis sed sunt iste ipsam aliquid exercitationem nobis
        laboriosam. Neque quod sunt molestiae porro veniam exercitationem praesentium inventore ipsum nesciunt amet odio
        iusto, similique perspiciatis, assumenda, eum rerum. Tempore inventore, libero iste, modi officia sint fugit
        nemo illo atque error veritatis voluptatem consectetur. Sint quia quos deserunt alias vel, consectetur sed
        inventore quaerat doloribus saepe laborum eos ex temporibus? Laboriosam, fugiat harum quasi placeat voluptas
        labore, error commodi incidunt ducimus corrupti dolores nam minus consequatur iusto! Quas, alias laudantium vel
        optio cum voluptate aliquam consequatur eaque voluptatem tenetur animi accusamus modi, sunt, perspiciatis
        voluptates obcaecati repellat fugit expedita. Inventore, a esse autem, atque nihil unde quam beatae vel ipsa ex
        nesciunt corporis facilis in veritatis repellendus rerum. Blanditiis debitis sunt modi voluptas tenetur cum sit
        similique ea neque iste iure ipsum, quo architecto earum eum? Voluptatibus facilis commodi quo voluptatum.
        Quisquam eaque nesciunt vero eos iure nisi ea illo veniam at. Aliquid voluptates officia deleniti nihil, a nobis
        rerum provident accusantium non minima ratione ducimus officiis enim voluptate adipisci. Repellendus
        exercitationem fugit a totam suscipit excepturi aliquam, neque vero pariatur sit iure ab odio consequatur
        reiciendis quam, similique debitis qui incidunt minima maiores non. Nobis deleniti eligendi illum praesentium
        vitae maxime iste culpa libero tempore quia provident reprehenderit optio quam, totam sed vero, a quo odit?
        Dolorem eum eligendi earum explicabo tempora illum tenetur eos consectetur unde facere est accusantium nulla,
        veritatis praesentium doloribus voluptatibus. Error quidem, quis possimus quaerat dolore et. Incidunt a aut
        dignissimos voluptatem voluptas, dolor dolorum accusantium praesentium voluptatibus similique in repudiandae quo
        hic quibusdam veniam animi distinctio nobis ducimus quas aliquam natus velit amet corrupti. Reiciendis
        laudantium inventore ut accusantium. Dolores sequi consequatur, qui nam aspernatur iure! Modi adipisci ducimus
        vitae blanditiis maiores, laudantium aperiam aut ullam, odio impedit fugiat vel laborum accusantium fugit porro!
        Cupiditate vel voluptates nisi nobis omnis.
        <v-sheet class="pa-3">
          <v-skeleton-loader type="card"></v-skeleton-loader>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [{
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [{
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [{
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
    inject: {
      theme: {
        default: {
          isDark: false
        },
      },
    },
  }
</script>