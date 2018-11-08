import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Img extends Vue {
    @Prop({ type: String, required: true }) private src!: string
    @Prop({ type: String, required: true }) private alt!: string
    @Prop({ type: String }) private title!: string
    @Prop({ type: String }) private width!: string
    @Prop({ type: String }) private height!: string

    private imageWidth = () => this.$props.width ? this.$props.width : '"auto"'
    private imageHeight = () => this.$props.height ? this.$props.height : '"auto"'
}
