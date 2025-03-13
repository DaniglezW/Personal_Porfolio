import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from 'react-i18next';

const highlightText = (text, keywords) => {
  console.log(keywords);
  if (!keywords || !Array.isArray(keywords) || keywords.length === 0) return text;
  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');

  return text.split(regex).map((part, index) =>
    keywords.some(keyword => keyword.toLowerCase() === part.toLowerCase())
      ? <span key={index} className="highlight">{part}</span>
      : part
  );
}

const TimelineElement = ({ title, description, date, iconUrl, iconOnClick, keywords }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  const previewLength = 150;
  const isLong = description.length > previewLength;
  const translatedKeywords = keywords.map(keyword => t(`KEYWORDS.${keyword}`));
  const previewText = isLong ? description.slice(0, previewLength) + "..." : description;

  return (
    <VerticalTimelineElement
      className="timeline-element"
      contentStyle={{ background: "var(--primary-color)", color: "var(--secundary-color)", borderRadius: "15px", padding: "20px", transition: "box-shadow 0.3s ease-in-out", boxShadow: "0 0 15px var(--shadow-time-line)" }}
      contentArrowStyle={{ borderRight: "7px solid var(--primary-color)" }}
      date={date}
      dateClassName="timeline-date"
      iconStyle={{ background: "white", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}
      iconOnClick={iconOnClick}
      icon={<img src={iconUrl} alt={title} className="timeline-icon-img" />}
    >
      <div className="salesianos-text">
        <h3><b>{title}</b></h3>
        <div className="description-container" style={{ maxHeight: expanded ? '500px' : '150px', overflow: "hidden", transition: 'max-height 0.5s ease-in-out' }}>
          <p>{expanded ? highlightText(description, translatedKeywords) : highlightText(previewText, translatedKeywords)}</p>
        </div>
        {isLong && (
          <div className="button-container">
            <button onClick={toggleExpanded} className="expand-button">
              {expanded ? t("showLess") : t("learnMore")}
            </button>
          </div>
        )}
      </div>
    </VerticalTimelineElement>
  )
};

TimelineElement.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
  iconOnClick: PropTypes.func.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TimelineElement;