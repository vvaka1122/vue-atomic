import { Component, Prop, Vue } from 'vue-property-decorator'
import Icon from '@/components/Atoms/Icon'
import Button from '@/components/Atoms/Button'

@Component({
  components: {
      Icon,
      Button,
  }
})
export default class ExitButton extends Vue {
  // Props
  @Prop({ type: Boolean, default: false }) private isActive!: boolean
  @Prop({ type: Function }) private click!: (event : Event) => {}
}
