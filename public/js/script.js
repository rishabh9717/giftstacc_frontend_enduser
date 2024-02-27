

$(document).ready(function () {


        $(".chatbtnbtnicon").click(function () {
            $(".chatbox").slideToggle(), $(".chatboxoverlay").show();
        }),
            $(".chatboxclosebtn").click(function () {
                $(".chatboxoverlay").hide(), $(".chatbox").slideToggle(), $(".chatbtn").hide(), (sessionStorage.isVisited = 1);
            }),
            sessionStorage.isVisited && $(".chatbtn").hide(),
            $(".chatboxoverlay").click(function () {
                $(".chatbox").slideToggle(), $(".chatboxoverlay").hide();
            });
      
        $("#showpass, #showpass2").click(function () {
            $(this).toggleClass("fa-eye-slash fa-eye");
            var e = $(this).parent().prev();
            "password" == e.attr("type") ? e.attr("type", "text") : e.attr("type", "password");
        });
            $(function () {
                $.widget("custom.catcomplete", $.ui.autocomplete, {
                    _create: function () {
                        this._super(), this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
                    },
                    _renderMenu: function (e, t) {
                        var o = this,
                            a = "";
                        $.each(t, function (t, s) {
                            var i;
                            s.type != a && (e.append("<li class='ui-autocomplete-category '>" + s.type + "</li>"), (a = s.type)),
                                (i = o._renderItemData(e, s)),
                                s.category && i.attr("aria-label", s.type + " : " + s.value);
                        });
                    },
                    _renderItem: function (ul, item) {
                        var $li = $('<li>'),
                            $img = $('<img height="60px">');
                        //$p = $('<p>');
                        $img.attr({
                            src: item.img,
                            alt: item.label
                        });

                        $li.attr('data-value', item.label);
                        $li.append('<a href="#" style="padding:0 0px;line-height:1px;">');
                        $li.append('<p style="display:inline-block;">');
                        $li.find('a').append($img);
                        $li.find('p').append(item.label);
                        //$li.find('a').append($p)

                        return $li.appendTo(ul);
                    }
                }),
                    $("#txtsearch").catcomplete({
                        delay: 0,
                        source: function (e, t) {
                            $.ajax({
                                url: "https://cc.shopstacc.com/AutoComplete.asmx/getsearchrecords2",
                                dataType: "json",
                                data: { strname: e.term },
                                success: function (e) {
                                    t(e);
                                },
                            });
                        },
                        focus: function (e, t) {
                            $("#txtsearch").val(t.item.value);
                            var o = t.item.id,
                                a = t.item.type;
                            return $("#hsearchid").val(o), $("#hsearchtype").val(a), !1;
                        },
                        select: function (e, t) {
                            return (
                                $("#txtsearch").val(t.item.value),
                                (window.location.href =
                                    "https://cc.shopstacc.com/search-list.aspx?keyw=" +
                                    t.item.value.replace("&", "^").replace("|", "").replace(",", "").replace("-", "").replace("'", "''") +
                                    "&source=" +
                                    t.item.type.replace("&", "^").replace("|", "").replace(",", "").replace("-", "").replace("'", "''") +
                                    "&id=" +
                                    t.item.id),
                                !1
                            );
                        },
                    });
            }),
            $(window).width() < 993 &&
                ($("#mybaglinkmenu").click(function () {
                    $("#floatingcart").toggle(), $("#cartoverlayid").removeClass("d-none").addClass("cartoverlay");
                }),
                $("#cartoverlayid").click(function () {
                    $("#floatingcart").removeAttr("style"), $("#cartoverlayid").removeAttr("style");
                    $("#floatingcartmob").removeAttr("style"), $("#cartoverlayid").removeAttr("style");
                })),
            $("#showvideobtn").click(function () {
                $(".videobannerimg").hide(), $(".landingbanner").show();
                var e = $(".bannermainvideo");
                e.attr("src", e.data("src"));
            }),
            $(window).width() > 1080 &&
                ($("#mybaglinkmenu").attr("href", "cart.aspx"),
				$(".scroll").click(function () {
                return $("html, body").animate({ scrollTop: $(this.hash).offset().top - 100 }, 1e3), !1;
            }),
                $(".bannermainvideo").attr("data-src", "https://www.youtube.com/embed/nqMRNr6aYJs?rel=0&amp;autoplay=1&loop=1&playlist=nqMRNr6aYJs&mute=1&controls=0&amp;showinfo=0"),
                $(".homesoundbtn").click(function () {
                    $(".bannermainvideo").hasClass("videomuted")
                        ? ($(".bannermainvideo").attr("src", "https://www.youtube.com/embed/nqMRNr6aYJs?rel=0&amp;autoplay=1&loop=1&playlist=nqMRNr6aYJs&controls=0&amp;showinfo=0"),
                          $(this).children().removeClass("fa-volume-mute").addClass("fa-volume-up"),
                          $(".bannermainvideo").removeClass("videomuted"))
                        : ($(".bannermainvideo").attr("src", "https://www.youtube.com/embed/nqMRNr6aYJs?rel=0&amp;autoplay=1&loop=1&playlist=nqMRNr6aYJs&mute=1&controls=0&amp;showinfo=0"),
                          $(this).children().removeClass("fa-volume-up").addClass("fa-volume-mute"),
                          $(".bannermainvideo").addClass("videomuted"));
                })),
            $(window).width() < 1081 &&
                ($("#mybaglinkmenu").attr("href", "javascript:void(0)"),
				$(".scroll").click(function () {
                return $("html, body").animate({ scrollTop: $(this.hash).offset().top - 56 }, 1e3), !1;
            }),
                $(".bannermainvideo").attr("data-src", "https://www.youtube.com/embed/6Lnf6H-tfhE?rel=0&amp;autoplay=1&loop=1&playlist=6Lnf6H-tfhE&mute=1&controls=0&amp;showinfo=0"),
                $(".homesoundbtn").click(function () {
                    $(".bannermainvideo").hasClass("videomuted")
                        ? ($(".bannermainvideo").attr("src", "https://www.youtube.com/embed/6Lnf6H-tfhE?rel=0&amp;autoplay=1&loop=1&playlist=6Lnf6H-tfhE&controls=0&amp;showinfo=0"),
                          $(this).children().removeClass("fa-volume-mute").addClass("fa-volume-up"),
                          $(".bannermainvideo").removeClass("videomuted"))
                        : ($(".bannermainvideo").attr("src", "https://www.youtube.com/embed/6Lnf6H-tfhE?rel=0&amp;autoplay=1&loop=1&playlist=6Lnf6H-tfhE&mute=1&controls=0&amp;showinfo=0"),
                          $(this).children().removeClass("fa-volume-up").addClass("fa-volume-mute"),
                          $(".bannermainvideo").addClass("videomuted"));
                })),
            $(window).scroll(function () {
                $(this).scrollTop() > 50 ? $(".scrolltop:hidden").stop(!0, !0).fadeIn() : $(".scrolltop").stop(!0, !0).fadeOut();
            }),
            $(function () {
                $(".topscroll").click(function () {
                    return $("html,body").animate({ scrollTop: $("body").offset().top }, "1000"), !1;
                });
            }),
            $(".myaccmenubtn a").click(function () {
                $(".usermenumainbx").slideToggle();
            }),
            $("#showbagbtn").click(function () {
                "none" == $(".showbagdta").css("display")
                    ? ($(".showbagdta").slideToggle(), $(".hidecartmbprice").toggle(), $(this).html('<img src="images/top3-1.png">Hide order summary <i class="fas fa-chevron-up"></i>'))
                    : ($(".showbagdta").slideToggle(), $(".hidecartmbprice").toggle(), $(this).html('<img src="images/top3-1.png">Show order summary <i class="fas fa-chevron-down"></i>'));
            });
       
        var s = $(".couponcodeshowbtn input");
    $(s).click(function () {
        s.is(":checked"), $("#couponcodebox").slideToggle(), $(this).parent().hide();
    }),
        $(".overlayformobilemenu, .menuclosebtn a").click(function () {
            $(".button").toggleClass("menu-opened"), $(".top-menu").removeClass("topmenuopen"), $(".overlayformobilemenu").hide();
        }),
        $("#filtermobileopen").click(function () {
            $(".sidefilter").addClass("sidefilteropen"),
                $(".filterboxbgoverlay").show(),
                $(".filterdrpbtn a").addClass("collapsed"),
                $(".filterinner").removeClass("show"),
                $("#preferancefillink").removeClass("collapsed"),
                $("#prefrence").addClass("show");
        }),
        $(".filterboxbgoverlay, #closefilterbtn").click(function () {
            $(".sidefilter").removeClass("sidefilteropen"), $(".filterboxbgoverlay").hide();
        }),
        (function (e) {
            e.fn.menumaker = function (t) {
                var o = e(this),
                    a = e.extend({ format: "dropdown", sticky: !1 }, t);
                return this.each(function () {
                    e(".button").on("click", function () {
                        e(this).toggleClass("menu-opened");
                        var t = e(".top-menu");
                        t.hasClass("open") ? (t.removeClass("topmenuopen"), e(".overlayformobilemenu").hide()) : (t.addClass("topmenuopen"), e(".overlayformobilemenu").show(), "dropdown" === a.format && t.find("ul").show());
                    }),
                        o.find("li ul").parent().addClass("has-sub"),
                        (multiTg = function () {
                            o.find(".has-sub").prepend('<span class="submenu-button"></span>'),
                                o.find(".submenu-button").on("click", function () {
                                    e(this).toggleClass("submenu-opened"), e(this).siblings("ul").hasClass("open") ? e(this).siblings("ul").removeClass("open").slideToggle() : e(this).siblings("ul").addClass("open").slideToggle();
                                });
                        }),
                        "multitoggle" === a.format ? multiTg() : o.addClass("dropdown");
                });
            };
        })(jQuery),
        (function (e) {
            e(document).ready(function () {
                e("#cssmenu").menumaker({ format: "multitoggle" });
            });
        })(jQuery),
        $("#playicon, #playicon1").click(function () {
            $("#myAudio").paused ? $("#myAudio")[0].pause() : $("#myAudio")[0].play();
        }),
        $(window).scroll(function () {
            $(window).scrollTop() > 150 ? $(".fixheader").addClass("sticky") : $(".fixheader").removeClass("sticky");
        }),
        $(window).scroll(function () {
            $(window).scrollTop() > 100 ? $(".clearfilterbox").addClass("filsticky") : $(".clearfilterbox").removeClass("filsticky");
        }),
        $("#cartoverlayid").click(function () {
            $("#floatingcart").removeClass("d-block"), $("#cartoverlayid").addClass("d-none");
            $("#floatingcartmob").removeClass("d-block"), $("#cartoverlayid").addClass("d-none");
        }),


        $(".gototop").click(function () {
            return $("html, body").animate({ scrollTop: 0 }, "slow"), !1;
        }),
        $("#reviewbuttontop").click(function () {
            $(".prodetailtabs .tab-content .tab-pane .collapse").removeClass("show"),
                $(".prodetailtabs .tab-content .tab-pane .detailcollboxlistlink a").addClass("collapsed"),
                $("#review .detailcollboxlistlink a").removeClass("collapsed"),
                $("#mbreview").addClass("show");
        }),
        $("#showmeter").click(function () {
            $(".prodetailtabs .tab-content>.tab-pane").removeClass("active"), $(".prodetailtabs .nav-tabs a").removeClass("active"), $("#zoobopmetertab").addClass("active show"), $("#zmetertablink").addClass("active");
        }),
        $('[data-toggle="tooltip"]').tooltip(),
        $("#profileeditbtn").click(function () {
            $(".disabledtextbox").attr("disabled") ? ($(".disabledtextbox").attr("disabled", !1), $("#submitbtnbox").show()) : ($(".disabledtextbox").attr("disabled", !0), $("#submitbtnbox").hide());
        });
            

        $(function () {
            if (screen.width < 767) {
                $(".blogbox2 img").each(function () {
                    var attr = $(this).attr('data-image-src');
                    if (typeof attr !== typeof undefined && attr !== false) {
                        $(this).css('content', 'url(' + attr + ')');
                    }

                });

            }
        });
    });