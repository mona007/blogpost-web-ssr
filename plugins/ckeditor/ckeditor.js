/* eslint-disable no-unused-vars */
import Vue from 'vue'
import CKEditor from '@ckeditor/ckeditor5-vue2'
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import Code from '@ckeditor/ckeditor5-basic-styles/src/code'
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript'
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import Indent from '@ckeditor/ckeditor5-indent/src/indent'
import List from '@ckeditor/ckeditor5-list/src/list'
import Link from '@ckeditor/ckeditor5-link/src/link'
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice'
import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation'
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices'
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder'
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter'
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage'
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize'
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage'
// import fileUploadAdapter from './extraPlugin/upload-adapter'

import '@/assets/ckeditor.css'

Vue.use(CKEditor)

export default ({ $axios }, inject) => {
  inject('ckeditor', {
    editor: {
      classic: ClassicEditor,
    },
    ui: {},
    config: {
      plugins: [
        Essentials,
        Heading,
        Paragraph,
        Alignment,
        Bold,
        Italic,
        Underline,
        Strikethrough,
        Code,
        Subscript,
        Superscript,
        BlockQuote,
        Indent,
        Link,
        List,
        TextTransformation,
        Autoformat,
        CKFinder,
        CloudServices,
        PasteFromOffice,
        Table,
        TableToolbar,
        MediaEmbed,
        UploadAdapter,
        Image,
        EasyImage,
        ImageResize,
        ImageCaption,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        LinkImage,
      ],
      // extraPlugins: [(editor) => fileUploadAdapter(editor, $axios)],
      toolbar: {
        items: [
          'undo',
          'redo',
          '|',
          'heading',
          '|',
          // 'fontFamilyDropdown',
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'code',
          'subscript',
          'superscript',
          '|',
          'alignment:left',
          'alignment:right',
          'alignment:center',
          'alignment:justify',
          '|',
          'bulletedList',
          'numberedList',
          'outdent',
          'indent',
          '|',
          'link',
          'uploadImage',
          'blockQuote',
          'insertTable',
          'mediaEmbed',
          // 'fullScreen',
        ],
      },
      image: {
        toolbar: [
          'imageStyle:inline',
          'imageStyle:block',
          'imageStyle:side',
          '|',
          'toggleImageCaption',
          'imageTextAlternative',
          '|',
          'linkImage',
        ],
      },
      table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
      },
      fontFamily: {
        options: [
          'default',
          'Ubuntu, Arial, sans-serif',
          'Ubuntu Mono, Courier New, Courier, monospace',
        ],

        value: 'Arial',
      },
    },
  })
}
