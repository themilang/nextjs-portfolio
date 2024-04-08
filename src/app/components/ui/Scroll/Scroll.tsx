
import React, { useEffect } from 'react';
import '../Scroll/Scrollcss.css';
import $ from 'jquery';

const Scroll = () => {
  useEffect(() => {
    $(function() {
      $('a[href*="about"]').on('click', function(e) {
        e.preventDefault();
        const targetHref = $(this).attr('href');
        if (targetHref) { // Check if targetHref is not undefined
          $('html, body').animate({ 
            scrollTop: $(targetHref).offset()?.top ?? 0
          }, 500, 'linear');
        }
      });
    });
  }, []);

  return (
    <section className='demo mt-68' id="section10" >
      <a href="#about"><span></span>Scroll</a>
    </section>
  );
};

export default Scroll;
