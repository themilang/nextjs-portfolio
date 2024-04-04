import React, { useEffect } from 'react';
import '../Scroll/Scrollcss.css';
import $ from 'jquery';

const Scroll = () => {
  useEffect(() => {
    $(function() {
      $('a[href*="about"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
      });
    });
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <section className='demo  mt-68' id="section10" >
      <a href="#about"><span></span>Scroll</a>
    </section>
  );
};

export default Scroll;
