<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-breadcrumbs :items="breadcrumbs" />
      </v-col>
      <v-col cols="12">
        <v-card flat color="default">
          <v-card-subtitle> Create Post </v-card-subtitle>
          <v-divider />
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" md="8" class="pb-0">
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-text-field dense outlined label="Title" />
                  </v-col>
                  <v-col cols="12">
                    <v-select dense outlined label="Genre" />
                  </v-col>
                  <v-col cols="12">
                    <v-select dense outlined label="Keywords" />
                  </v-col>
                  <v-col cols="12">
                    <v-textarea dense outlined label="Description" />
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" sm="12" md="4" class="pt-0 pt-md-3">
                <v-sheet outlined rounded>
                  <v-card
                    outlined
                    height="150px"
                    min-width="150px"
                    width="100%"
                    color="default"
                    class="d-flex flex-column justify-center align-center"
                  >
                    <v-icon>mdi-cloud-upload</v-icon>
                    <div class="text--secondary subtitle-2">Thumbnail</div>
                    <div class="text--secondary">4MB (.jpg,.jpeg,.png)</div>
                  </v-card>
                </v-sheet>
              </v-col>
              <v-col cols="12" class="pt-md-0">
                <client-only>
                  <template v-if="editor">
                    <ckeditor
                      v-model="content"
                      class="default--text"
                      :editor="editor"
                      :config="editorConfig"
                    />
                  </template>
                </client-only>
              </v-col>
              <v-col cols="12" class="text-right">
                <v-btn depressed color="primary">
                  <v-icon left>mdi-content-save</v-icon>
                  Save Post
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      breadcrumbs: [
        { text: 'Dashboard', exact: true, to: '/admin/home' },
        { text: 'Posts', exact: true, to: '/admin/posts' },
        { text: 'Create Post', exact: true, to: '/admin/posts/create' },
      ],
      editor: null,
      editorConfig: {},
      content: '',
    };
  },
  head: {
    title: 'Create Post',
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      this.editor = this.$ckeditor.editor.classic;
      this.editorConfig = this.$ckeditor.config;
    }
  },
};
</script>
