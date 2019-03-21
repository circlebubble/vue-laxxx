<template>
  <div
    :data-lax-preset="setPreset"
    :data-lax-optimize="optimize"
    :data-lax-opacity="opacity"
    :data-lax-translate="translate"
    :data-lax-translate-x="translateX"
    :data-lax-translate-y="translateY"
    :data-lax-scale="scale"
    :data-lax-scale-x="scaleX"
    :data-lax-scale-y="scaleY"
    :data-lax-skew="skew"
    :data-lax-skew-x="skewX"
    :data-lax-skew-y="skewY"
    :data-lax-rotate="rotate"
    :data-lax-brightness="brightness"
    :data-lax-contrast="contrast"
    :data-lax-hue-rotate="hueRotate"
    :data-lax-blur="blur"
    :data-lax-invert="invert"
    :data-lax-saturate="saturate"
    :data-lax-grayscale="grayscale"
    :data-lax-bg-pos="bgPosition"
    :data-lax-bg-pos-x="bgPositionX"
    :data-lax-bg-pos-y="bgPositionY"
  >
    <slot />
  </div>
</template>

<script>
import lax from 'lax.js'

const attribute = [
  'lax-preset',
  'lax-optimize',
  'lax-opacity',
  'lax-translate',
  'lax-translate-x',
  'lax-translate-y',
  'lax-scale',
  'lax-scale-x',
  'lax-scale-y',
  'lax-skew',
  'lax-skew-x',
  'lax-skew-y',
  'lax-rotate',
  'lax-brightness',
  'lax-contrast',
  'lax-hue-rotate',
  'lax-blur',
  'lax-invert',
  'lax-saturate',
  'lax-grayscale',
  'lax-bg-pos',
  'lax-bg-pos-x',
  'lax-bg-pos-y'
]

const createDirectives = () => {
  const directives = {}

  attribute.map(item => {
    directives[item] = {
      bind: (element, { value, name }) => {
        element.setAttribute(`data-${name}`, value)
        lax.addElement(element)
      }
    }
  })

  return directives
}

export default {
  name: 'vue-laxxx',
  props: {
    preset: {
      type: [String, Function],
      default: () => null
    },
    optimize: {
      type: Boolean,
      default: () => true
    },
    opacity: {
      type: String,
      default: () => null
    },
    translate: {
      type: String,
      default: () => null
    },
    translateX: {
      type: String,
      default: () => null
    },
    translateY: {
      type: String,
      default: () => null
    },
    scale: {
      type: String,
      default: () => null
    },
    scaleX: {
      type: String,
      default: () => null
    },
    scaleY: {
      type: String,
      default: () => null
    },
    skew: {
      type: String,
      default: () => null
    },
    skewX: {
      type: String,
      default: () => null
    },
    skewY: {
      type: String,
      default: () => null
    },
    rotate: {
      type: String,
      default: () => null
    },
    brightness: {
      type: String,
      default: () => null
    },
    contrast: {
      type: String,
      default: () => null
    },
    hueRotate: {
      type: String,
      default: () => null
    },
    blur: {
      type: String,
      default: () => null
    },
    invert: {
      type: String,
      default: () => null
    },
    saturate: {
      type: String,
      default: () => null
    },
    grayscale: {
      type: String,
      default: () => null
    },
    bgPosition: {
      type: String,
      default: () => null
    },
    bgPositionX: {
      type: String,
      default: () => null
    },
    bgPositionY: {
      type: String,
      default: () => null
    }
  },
  data () {
    return {
      setPreset: ''
    }
  },
  directives: createDirectives(),
  created () {
    if (window !== 'undefined') {
      let current = window.innerWidth

      lax.setup()

      window.addEventListener('resize', () => {
        if (current !== window.innerWidth) {
          lax.populateElements()
        }
      })

      document.addEventListener('scroll', () => {
        lax.update(window.scrollY)
      }, false)

      lax.update(window.scrollY)
    }
  },
  mounted () {
    if (typeof this.preset === 'function') {
      const { name, preset } = this.preset()

      this.setPreset = name

      lax.addPreset(name, () => preset)
    } else {
      this.setPreset = this.preset
    }

    setTimeout(() => {
      lax.addElement(this.$el)
    }, 100)
  }
}
</script>
