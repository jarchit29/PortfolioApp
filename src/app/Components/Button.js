import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button class="learn-more">
                <span aria-hidden="true" class="circle">
                    <span class="icon arrow"></span>
                </span>
                <span class="button-text">{props.buttonLabel}</span>
            </button>
        </div>
    )
}

export default Button