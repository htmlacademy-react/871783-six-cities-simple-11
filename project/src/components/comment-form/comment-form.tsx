import React, { useState, ChangeEvent, FormEvent, Fragment, useEffect } from 'react';
import { ratings } from '../../const';
import { useAppDispatch } from '../../hooks';
import { fetchSendCommentAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { setLoadingStatus } from '../../store/action';

function CommentForm(): JSX.Element {
  const [formData, setFormData] = useState({
    review: '',
    rating: 0,
  });
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = Number(params.id);

  const resetForm = () => {
    setFormData({
      rating: 0, review: ''
    });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { review, rating } = formData;
    setLoadingStatus(true);
    dispatch(fetchSendCommentAction({id, comment: review, rating}));
    setLoadingStatus(false);
    resetForm();
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    const { name, value } = evt.target;
    if (name === 'rating') {
      setFormData({...formData, [name]: +value});
    } else {setFormData({...formData, [name]: value});}
  };

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const formDataValidate = () => formData.rating === 0 || formData.review.length < 50 || formData.review.length > 300;

  useEffect(() => {
    // reset();
    setIsSubmitDisabled(formDataValidate());
  }, [formData]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={ handleFormSubmit }>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        { ratings.map((rating) => (
          <Fragment key={rating}>
            <input className="form__rating-input visually-hidden" name="rating" value={ rating.toString() } id={`${rating.toString()}-stars`} type="radio" onChange={ handleInputChange } />
            <label htmlFor={`${rating.toString()}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={ handleInputChange }
        value={ formData.review }
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={ isSubmitDisabled }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
