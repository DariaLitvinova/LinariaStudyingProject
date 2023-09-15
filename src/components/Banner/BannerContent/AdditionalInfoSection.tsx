import React from 'react'
import { MOVIE_TAGS } from '../../../constants/constants'
import TagButton from '../../Buttons/TagButton'
import { Block } from '../../LinariaComponents/Block'
import { Dot } from '../../LinariaComponents/Dot'

const AdditionalInfoSection = () => {
  return (
    <Block gap={32}>
      <Block gap={8} orientation='horizontal'>
        {MOVIE_TAGS.map(({ id, tagText }, index) => (
          <React.Fragment key={id}>
            <TagButton text={tagText} />
            {index !== MOVIE_TAGS.length - 1 && <Dot />}
          </React.Fragment>
        ))}
      </Block>
    </Block>
  )
}

export default AdditionalInfoSection
