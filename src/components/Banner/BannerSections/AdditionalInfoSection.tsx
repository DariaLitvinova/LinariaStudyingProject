import React from 'react'
import { CAST_INFORMATION, MOVIE_TAGS } from '../../../constants/constants'
import TagButton from '../../Buttons/TagButton'
import { WrapperSC } from '../../Wrapper/Wrapper.styled'
import { DotSC } from '../../Dot/Dot.styled'
import CastInformation from './CastInformation'
import { AlignItems, Orientation } from '../../../style_variables/CSS_PROPERTIES'

const AdditionalInfoSection = () => {
  return (
    <WrapperSC gap='32px'>
      <WrapperSC gap='8px' orientation={Orientation.Row} align={AlignItems.Center}>
        {MOVIE_TAGS.map(({ id, tagText }, index) => (
          <React.Fragment key={id}>
            <TagButton text={tagText} />
            {index !== MOVIE_TAGS.length - 1 && <DotSC />}
          </React.Fragment>
        ))}
      </WrapperSC>
      <WrapperSC gap='16px'>
        {CAST_INFORMATION.map(({ id, data }) => (
          <CastInformation key={id} data={data} />
        ))}
      </WrapperSC>
    </WrapperSC>
  )
}

export default AdditionalInfoSection
