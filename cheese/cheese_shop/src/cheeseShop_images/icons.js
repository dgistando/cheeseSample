//Just a map for the icons so the cheese-detail isnt cluttered
export default function(detail){
    var icons = {
        Made : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALuSURBVGhD7dlNyExRHMfxIXmX17zkbWFBSWKhRBYkFIoiJS9ZkIWdBSGFIiQKZYENZeMlKxKSkBISKwt5y2ssROT1+3uaeTqd5z937jkzuffW/dWnnpk55z/3zjP3nHPPVMqUKZN5BmM3buNeCucxH7nKaLzC3wg7kJuchXWQafzBBGSeLvgO6yDT2oLM0xf+ga3CkgSX4bY/gsxjnYieS8pRuO31OPP0wG+4B3YSxxI8gdt+L3IR/6sSajoyzzi8hHWAafxA5qPWILyAdYAh9EEMQ8vTCROxCGuxHNOg68GNZmf/oHRi1nXhegC/3xV0RksyHPvxHv4byTecwiTMqj7nuokBaJSuuAq//xo0Ff0H1uEr/OIWjVL+yb6D1ltpMxCv4dZ4g16Iik7iMNyCMVYiNAvg19mAqOyCX6zmKW5B474/V7g+ohtich1uLb2nPtygzMAvuIW0iDuNsXAzFAdhrauOIzbz4NebjKDcgVtAn3qjC24m/GtJS/juiIlGKv9a2YzUmQK3s2xHmiyF33cFYnMCbi09TozOvn/VHridP2AEaq8n0RD7EG7/C7DaprENbq1r8Nu0zzGL8QluhyLRsS9EoU+i5hnaFmfWi0XyCJVzzhNFtRXmLFokmhpGoW2T4C2sRkVwCe3ZB6tRMzRsb8LUKv2tJYvVthnL0J7xsBrF0iiiucfPSDyH1SeGRtwOK4e7sBrHmIN6mQurTwxzl2U9rMah9Ckl3dHptc+w+obScqpD+kF3elaHEFpuN4raWH1DPEbdaJludQqh5Xxv1EsftGIS3oi6mQ2rU6ikPVtNXlafED8xBHWj728rRhW9kfZ5/ayGf8MW4yIaZieszjHu40CV/rbaxNB2VMOMgW5rrQJ5oF0abRulyg1YRfJA+wOpo++yVSQPtNOZOho+v8AqlCVdZ8HRbxlWsSxFbdJpb8sqlhVNotpODY529Vo5ZDar4VZQUrQLfwbWD/v/0yH0RJkyZaJSqfwDhkjE8O3NpVYAAAAASUVORK5CYII=",
        Country_of_origin:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAONSURBVGhD7dlLyA1hHMfxkyR3ctkRGyFlxULZorBwjSRi4V5KFrJyXZCyRsgO5bJwl7vXPVsLiVxXLiXlzvdX76l/f88588zMM+e1OL/6lI75PzPPO2dmnvmfWjvttNPSDMFsbMVxXMGjTtc7P9uBudC2/1X6YDVu4Cf+RPqNO1iDAeiy9MU2vEfoQPP4hO0YiJZmHl4jdFBlvMVCVJ6e2IfQQaR0GL1RSXTaOxDacVEP8ct9VvcAyW8IQ/EYoR2WMQnjcMp8Zj2B9p0kPXANoR2VoTNhD3IRPsBvdw9Jvmb74QdP4Sh8RuEF/LaHUCpT4AdN4RYaPTuG4Sl8zQIUik7nM/gBY32D7nDWLsxENzTLGOjZYsfTrbk/cmcL7EB56UDKRMsYP6YewLmiC1x/AT9QHmUnopyBHfMjci1nlsAOUESKieji/wE77ipERxejLS5Ca7AUOQ077m1ERavZ77DFRZxHikyHHVfPn8HIzDTYwlifUX/3OIbhSJHu+AK7rznIjF58bJGWJs/dZyH6OlaVq7D7irp7aeVpi/ZgJLImU+VE9Pyx+wqtCv7JWdiitVCyJlPlRDbA7kuvzZnR8tkWLUY9zSZT5USWwu5LX/fM+OX6MtjEfM2yaJW7HrHRytjWR03kJmzRJvikmIxuoyMQk3WwtVFfLd06bdFehJJiMpMRk92wdVEXu7/9XkSjlJ1M7EQuwdapb5YZv+r8Cj3tG6XMZGImoraTjsHWqQmYGb3w+4bADDRL0cnETGQWbI2ObRCiche2+CSyMhW2JkbMRPyiMddtXm1MW6z25ng0iw7K1sTImsgEaN+2ZiWiox6WXmLsACfQLGrt2O1jaA2lxvYRbIT/ypyD3V7HlPt1dyfsIGKf8j5aWudpYofoHWYilOXw/6/X79zRzN/BDqSl+mg0ykHY7Yt4CU3GL93Va+6HQlELxg4m6qzoLhWKOi/+4izCT0Lmo1T0/fWDvsJYNIqul83wdUUdQOnor6y2pR9cF55fUNqo2+FrikjWMlXUo1VDObSjCwidnRQTSdrErkd3pdCZEd3rL0NPYf2GopSdiB7KUU2GItEp9q/Cnjow91Gm+a3aXqg8upuV7USGvIF+1mtp9JzRD5h+BVCE3hi1NNdKt8uiCamN2QG/am5G26pmBQp12auMLk69K+hM6U1Tv3TVm3b6tz5TT0rbRC/F22mnnbKp1f4CMEGYhLW9qIgAAAAASUVORK5CYII=",
        Family: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJjSURBVGhD7dhNiE1hHMfx6yVF3srGJDWjECuyYKEh0kTEwoaNJSWUDUpsNCVSRFiQNJMyoaRIdiSRjbxkI7LxkpckEYPvb+qp2+l/7nPOuedpHnq+9Wm63TPnPM/t3HuecxqpVCqVSg1TY7Aah9CHE9iKafhnWouX+GP4geMYi6jbid+wJtHsASYhylaiyCScK4iukXgGa8CtLEdULYY1UJ9+RNVuWAP1eYWoOgJroD76FYuq/bAG6vMGUaVrhzVQnxuIKl3gPsAabCubEF07YA02z2OMRnSNwACsQWd9xGyUaTJmYMLQq8DpE9ZC8SesCchDzETRdI26Dbdq+AV9t+YjeHNwEPfxGk9wEeuhVUDRNiDvQ/mGZYg+Lfm/wpqE8x4TEXX7YA0+azNqbRRWoBc38QKfoIPp73PcwSnoFJuCVl1FdtCWM6il8dgFXaWtA+XRuX8B82B1Ddb/ZZ1F223EO1gHKOMcsuf6AVjbZm1H5XRPfhrWjqvS7fFcuLrwHda2zmf4TtHcNIlLsHbcLi1zmk+1Lci769SpuQ6VOwlrx3XRdacDrlV4iuZtdM/fjcrpEU/zDkO5jGxanizC9KFXbXYX1oHrNIjzCPrI6BGsg9dFDzAWwKXvYw/24hh0j38Ue7AUunZVKuREbsGtbLXS1eJTv0rWto6WKJqkrmWlCjWRexgHtQRlr0366S61Gg4xkS/ohFoDPZCwtvPRAnMhChViItugZsG32vV5i6nwFmIi7pS6Duv9srTc8RZiIi7fF7sojdHbfzORw9Ata51cOiWs98vSGFOpVCqVqqlG4y+SKNbM+yQJBAAAAABJRU5ErkJggg==",
        Type: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJjSURBVGhD7dhNiE1hHMfx6yVF3srGJDWjECuyYKEh0kTEwoaNJSWUDUpsNCVSRFiQNJMyoaRIdiSRjbxkI7LxkpckEYPvb+qp2+l/7nPOuedpHnq+9Wm63TPnPM/t3HuecxqpVCqVSg1TY7Aah9CHE9iKafhnWouX+GP4geMYi6jbid+wJtHsASYhylaiyCScK4iukXgGa8CtLEdULYY1UJ9+RNVuWAP1eYWoOgJroD76FYuq/bAG6vMGUaVrhzVQnxuIKl3gPsAabCubEF07YA02z2OMRnSNwACsQWd9xGyUaTJmYMLQq8DpE9ZC8SesCchDzETRdI26Dbdq+AV9t+YjeHNwEPfxGk9wEeuhVUDRNiDvQ/mGZYg+Lfm/wpqE8x4TEXX7YA0+azNqbRRWoBc38QKfoIPp73PcwSnoFJuCVl1FdtCWM6il8dgFXaWtA+XRuX8B82B1Ddb/ZZ1F223EO1gHKOMcsuf6AVjbZm1H5XRPfhrWjqvS7fFcuLrwHda2zmf4TtHcNIlLsHbcLi1zmk+1Lci769SpuQ6VOwlrx3XRdacDrlV4iuZtdM/fjcrpEU/zDkO5jGxanizC9KFXbXYX1oHrNIjzCPrI6BGsg9dFDzAWwKXvYw/24hh0j38Ue7AUunZVKuREbsGtbLXS1eJTv0rWto6WKJqkrmWlCjWRexgHtQRlr0366S61Gg4xkS/ohFoDPZCwtvPRAnMhChViItugZsG32vV5i6nwFmIi7pS6Duv9srTc8RZiIi7fF7sojdHbfzORw9Ata51cOiWs98vSGFOpVCqVqqlG4y+SKNbM+yQJBAAAAABJRU5ErkJggg==",
        Fat_content: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ/SURBVGhD7dlPiE1RAMfxh6KkZMNGSqz8ScjKQklR/oWFLNUkkpRYTBgpSVYW/q/IjJISZYVoomRlZaXsiA1JNP7P99c4+jkdmTf33XOv1/3Vp968c+bc95vz3r1v3ms1adKkSddlA67gbkV07PUolIv4WRMXMKZoJ1ILVmlMO6MtTS1WpctoOw/giwxgR2Y6pj8GPaa28xC+yC7kjo7pj0GPqe3kLDILq0Zu/pH/psgUHMMn7NEdUWpfZBy24SXC+rsRp9ZF5uMxfG05jji1LTIZb+DrBoOIU9siq+Frui/Qa8ZTiyITMGnk5u9shq8ZWwtP5UXW4Bm+4R4WQZkNXzN2Cp7KiizEbfjvyWf0QnmBeDxQeU/2IrqgXcUPaO5XnMQc3Ph1n5zAWfs5ZSZCshXxC1qY9xqLEaJrxjmE8Sd2O2UrQrIU2YJX8DmiXdkJz3j0I56bchQhpRdZAr2QfdypTA88OovdQmq+O4SQ0oschI+573gPldkOz0ToLJb6vWA5QkovcgQ+FtPcj9Cu6T9Nj67u8dryAXvhKb3IRvhY7DBWQqddFfK/ss5kdxDmas4ZTEec0otMhd5S+Lh7BEW7oV0Zgq4jev6HM5yeetcwF39L6UWU+/Bxp13Qi1vR2463CGMqcB06YfwrWYocgI/H5iFkBvbjNJbpjlEmS5Gl8PHYJhRNliJ66ryDz3ErUDRZiig34XOCp9DVvGiyFemDz9GbRZ1Kp6ETyVbED6QPz8L/HZ1KtiL78BydeGGnkq3IAuj9U1nJVqTsdKRI13yI3TVfK+hLldRiVYo/Lhp19HVXasEqnEehaGcuIfVFZQ469jo0adKkSdek1RoGA9AJBk50at0AAAAASUVORK5CYII=",
        Calcium_content: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQBSURBVGhD7ZlbqFRlFIBPF8uwkki7QEVSD0YFiYTRg0UI2cWiIiqRKAgtCBKRUoxSCJUorOgGlRnUQ5l2eaiXSAsLtHzqIhmBVJBF94joYvp94IbF4j9zZs/M3udlPvhg2HvNWv+Zs//rHhkyZEijTMUb8THchO/hx/g+bsTlOBcvx1X4Km5FY4z1O4/iDWiu1rkMt+E+3D8gzeUPYO7GmY4fYakhg3QHWqsRrsXfsVS4CX9Daw6Ua/B/LBX8GX3W78U70Od9GdoXSvH6BBrrdzbjL1iKs6a1B8K5+AfmIrtwPh6Go3EBfor5uz/gNKwwh7nMmWN9CmxDXxyCOzEnX48TsRuOxrcw57BjH4oRc5o7x9pnbEvPXI056TNYlyOx9KjdhiWewxw7D3vmQ4zJPsEjsBdOxr1Y5fob12AJa3yGsbbDfU84QeV54jrshyvRZ/5hPMULHbgeY23bcjzWxs4XE/2EnTp2t9hnusFaeTS7CWvzEMYkLi/axqE5tuFBrM0GjEnWYtvY8NiG57E2b2NMsgTbxpqxDbapNm9iTHIPto2r59iGN7A2eSx/GtvGmrENz2JtlmJM8gW2iTP5boxt6OnxnokxiV6KbWGtXH8G1sZf5CuMid7BtrBWrO1/p+f11t0Yk+ksbBpr5Lo+6j1zLDqjx4RbsFvOw/sO6uducT8fa9qGY7Av3CTFpOphwljcj3Gt5mevjYWr3FhLbUPfHIVfY0zsHqUTV2CMj3Y6XLAPuMKO8da2DQPhVozJ9WIcjdcxx1d2WrOVRqpbcGC4k/sSY4EXcTS+xxgb7TQfvYIx1pEq7yL75k6MRX7F0ibrVIxx2X+x9D23ufls4HYcOG60/sNYaDZmrsIYU/IczFyEMcZajZ0+bsdYzHkm4+Iyxril/SddK+008wLRWo3hOW0s5sYn48IuxjgK5f33Cszk1fYj2BgLMBb7DjMe88SYlzHv9EoDhWddMcaDvsY4E2MxPQ0jeX22Elenax9gpJR3rMOJvvkRY0EPKSJ/Ybzva4eb07VvMJLnqXy/EV7DWPQprDgO4z09Hy9J11yuTMCKfLr4EjbOYoxFP8cKH7N4T09EXxHk6ydgRd5ALcLGcXMTi3pifhLK2Rjv6eE4JV3TM1DsC/neWdg4pYOzu1DyH2l/qXA+ifeq3V7e83is2hovYCzuSOVBtUei8XocnvMgYazLkj3hmj6OrZE7rzqh5SW4G6SK/MrOrUCeBNXBoVXexdyIrANDxQNYion2dG7VL3bsP7HUIHUkmoQVjlL58Yq6mnZiHBfmYGnv4Xv00zHjEVPuE/otXojjymT0xeaT6HsPO3GnzZCDguuodehL0YXY98HCkCFDOjEycgCplW56vNntJAAAAABJRU5ErkJggg==",
        Texture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMlSURBVGhD7dhbqA1RHMfx434tpXiSkluIQhR5cMkLxYPk+iBeSCEvkjyQIiLKLZGQS15EnojcioTEG1JKuZRLCcn1+6uz6tdq2vvsM2vO2Vvzq0+dM2tmr/nvPWvNrGkqU6ZMmTJl6jA9MRvrsRuncARbsBKjULfphIW4jG/4W8VL7MUQ1E1m4RmyTria3ziG/mi39IAumawTrNVbzESbpw9uI+uk5CuuYz92YB/O4zmy9pdfWIE2S1dcQ9bJ6EQ1VvRrKZOhguahgzaQEdiFrLH0B0vQJjmM+ASCg/BMQWi7j5EIGQBNDn68/MBEFJr5iDt2lQqRL9DkEKLZTpee7yMv0B2FpBvUgXf4Gbr2g+1QscEqeLt+AX3j0+HRWPLPlc0oJGsQd7YBHp24t2tC8AyEtr9DP21ojsbdHfixn9AbyfMI3pHoxD0tLUSOaoNlAjTY/fhlSJph8A6CPIX8bP7fcwl+/AUkzTp4Bxq0D6DnqfFG/2t7cA7erpuety+CZzHifjQ2k+UQvIOTUDRL+fZqs9YrVEpf6LHFj9F9J1niG6C+eSV1IYoeV/yYGUiWh/AP1yWgFFFIPKksRbLEz1VFFvIEfkw8jnLlBvzDgzyzlmQV9h6+T3zzzJUD8A8P8hZyER6tS+J7yXAki25M/uFB3kLWwhP38wF6HkuWwfAOgjyFfIemW088O55G8tyEdyK6xv0Gp5cNfgNcAG+/gtAW3x+mIv78pAM9JL7rZmntrKU3L4/h+75BWKAlTRc8hXcWa00hWjmehe8netouLJMQP0K4aoXobYtHz1HH4fuIfp3OKCwdoWs97jjQwssXUlqvhzb9PQgho3EPfrzoxUXS56s4KkLvoOKOK9FqUKvCsLzVtzwNJ5D1y+pNyhwUltYUofWGZiktoM7gFj4ia1/RW5V2K0Inp289q60WGjtjUVgqFaHtatcjxNXmbbXSeNiGXigsLSnCMw66jCpdPqKxcRcb4S8gCkmtRXjUNgbLsQl7sBWrMReFn3xIniLqJv9FEcpONHwRylC8RkMXEeLFNGwRISpGb8kbuogyZcooTU3/APpZPgz1e4gtAAAAAElFTkSuQmCC",
        Rind: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASwSURBVGhD7Zl5yG5TFIc/8zwlioyJUGSOiOIPktklJCVlFomQopQ/DCWzzEIhKbMkEjJkloyZM2WeZXyee99dv1bnfuK83/u96v3V0z3fWvvsvc95915r7XOnJppoopFpB3g2uBuq7oFssz2Mnc6Cv4JnoMrJZ5szYKy0KHwIOcnLoOoKyDYfgPeOjY6AnKDsBlV7Qm13OIyFloWPICf3PiwMTQsM/tVW2/q3fcy6LoGcmBwFTYfAyfMu5+pYqO0vglnVNvAH5KRehkVAbQA/wM+woQakzzZ5z++wNcyKloI3ISf0G2wOaml4FZrPiLUYqC3Byee9b8CSMHK5HHIicjYo98RtUP1XQ9M5UP0jX2I7wZ+Qk3gBWig9CdKXHAbKX+dFSJ992vdItAy8CzmBH2F9UGb4umySX6AtP/eQ96b/HXBZzrhqUpOjQa0MH0P6fMv11/NFrADKe9MnjjGj2hbqpB4E94Q8MLAlli7unWq37mr3PTSwNRzDiDgjcsAnIAf8DtYAdSqkT+6FBWEh8IGr/zRQa8P3kL7HYUa0L+RAchyozcDQm773wOVjAJCVwIyfbTJcnwDpk31gqPKtGudzkLfA5GbZ8dzA1nCzuwzV5XDxvMu5+eNXyLZGLvuRtwe2xmvgShiadoUcQOaA6tqsZ4I6CJptbw3oeMi2Ytmi9oPq2xmGpjsgO7fE8E0tAbUINJu7lNaErwc2+QJWAffLkwNb41Mwq9vn6wNb4xYYikxcdSMeCaqrfN8RlCfE6rsV1FZQfa3QPB3SbkBppU0vmeCyY4tE84V6GNL3KKjtIO0Nw+oWoOqDtnv9JWshan+9Vdf086CMQjWDt33TlU8ad4HaHdKeL+glSF+Ljr10IWSn14MyKqX9J3CdWxXXUJwYtdxbLpdanuwC6gZI+wXQW7XTc0EdCGl/BdQ6kPYubKO8J+2HgjoP0t5eXi/dDNnp+aA8+aX9aVDmA5Nh+hLrLNsov7Sk72BQjpF259Bbl0J2eiMov0ml/RtYHNR6cCdk8nPp3Q7rgrLtt5B9tE1dX57H6d7yvJ2dWm+p5aCucQfMTOxesBZbDdqvoKwU6gsyxHtEUE9B+k6E3vKgk50aXUxs6lpInzwGe4APUWUw0GdBWO+7BtSqUMNvy029ZHTxA0J2fAqo1eErSF/DyGV9ZhYXr+d34PoS7EvZd/r8pYaSENV1kJ2bbV0uyjfsqS/9/wa/sFjLKZdhrSLynN9bG0P9uV1C5gzlJp0uUs0P72lVssfbuuQccyMYqlzDOYj4MCuCslC0XnIy9aETfd5n2/axwj601bZXwtC1PHS99c/gAMhoZUTzqLo/+G1XvPYjnL4m7/Fe+6j9mm9m7FOqP7P5og4qlt/WZe3oO51s44mwluwNxxj6kqraFD6Brgk0PKOYEF2OljTitbZ6fqnY9yYwEplH7oOuifTBPluOGplc33tBLfz+C54qPQrnPhu5HNy6yyz/T0su+RzMT2btWX2ALq0F051FGp4U238zjKWugq6Jd3ETjKWM+ffDI5CfVS1BpP2tzza2NTeNtY4BJ+wDeHwVr7Xp+1/JD3ftDK68bl/tJ5poopFqaupvqkLS0O1g0aMAAAAASUVORK5CYII=",
        Colour: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOQSURBVGhD7dpZqE1RHMfxYx4yRYjyQB7EkwckhBB5E0/mB1MZokTIkMzDE4V4QRJCHlCmZMwQ4YkyDw8oolAyfH91dq3+/c/Ze99z9r734fzqU7d9/2vvdc6e1lr3FmqppZZc0x0TsQUncB33i27hGPS7CeiKBpV2WIzb+It/Cf3BNcxDa9RbOmAbvsHraBqfsQqtkGum4hO8TlXiFUYh87TFEXidiJyFLpeleFLcloYuuU1ojEyim1M3rXfwyEaEaYHL8GrjnILaVzWd8RTeASNf0BQ2A+HVf8UurMT54jZLZ7c5qhI9le7CO1BIZ8uLLkdb+x49EGYRbJ0cQlUSd09EvqMlbIbB1s6Bl0ewtaLHe0WZBm/HpexBeJO2h3c2B8HLQdha+Yl+qFP0nvgIu9OH0AHvBNtC6vg6bMfb4jZrJrzcg1cvN9AIqbMTdme6jsNMRpq3eeQ5OiLMFHi1IQ1/UkVnQ9d8uBM9WbzoZgzrkvqAtZgF7SPJF/IAqaKby+5kBbzMhq3N0nAkjgaAdgd65ntZA1ubpf1IFA3FvdOsF5h99neCLhFbmyUNMJsgNpPg7UDU6bkYDD15XsCrq5TGW2/wO9gW6o/YbIbXOC9HoTOtaFShd5OtWYDYaGZnG+ZFb/ZmCKN3x1WEdbsRG01Pw0Z5Wg8vCxHWnUNsHiNslCfNQ7wsQVh3E7HxBm5XMABtMASlhieVegY73dUTyg5d9GXHRgsCYSPN8uwER4PB1wjrquUC+kDpiZOwNYk+iJZswkaasnrZgbCu2jTi9baLrojYbEXYSPNvL3m/0UMa0MZGi2dhI003bXTdJpk1ZkFTC40+YtMFerOGjbWoED3fdTPuRfj7vOjL64vEsTe8aKylebkd3lfDRczA6BJGojdSR/eFd8AsrEZm0eVT15XEH9gHfcOaNB2HvVQjl5B5NJHyDl7OO3jX8BjoA9r66cg8Wtp5CXvwcsahVJbB1o9ALtFNlnRxQWejXLTYYNsMRW7ZANsBT5KBnJ58YZtcP4jmA2cQdsDT4M+IokGj3vC2I9Z4lMpy2PrcP4iiVfHDsJ0JaU7vLW2OxS/Y+nr5IFG05lVuZKoOH4AWJ7RYfRqlHhj1+kEUvSv0V1qvc2n0QoOIRspaxvQ6GSfRnCLvaBlTK4BaPPM6bWkoXuc/E+QRzVO0eDYfWrLRk07Lr9E/DehnTYq6oZZaaskthcJ/oxYBm9M0Y2IAAAAASUVORK5CYII=",
        Flavour: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJJSURBVGhD7dnNSxVRGMfxW0Lu0jLKpYS4CFxEhFHRJrfuXLkwLKFFG5cWaP0B9ge0kbQgspW4KFHc6aJN0KIgaqGrXugFi8iM7PuDuXAYnrkz3nvmhTg/+IDcmfuc53hn5s6cWwsJCQkJCalAenENdzGH2ziNeM7gDrTPDMZwEqWmD2rqDfYSLONUZCV6zfIaUyhsUl2YwHNYDVl+R6xtcX+xjhvogNccwCAe4ResBvLwEzoEL6Gl6LifxltYAxVJh95N9CBzruMlrIJl06H3AuoxNRfwB1ahuA/Qx3+vRfNQLWuMOPV2Hpmiq5FVxKWBT8BXuvER1lguHe6Z04ZnsArV6b/oO6ppjVX3FAexrxzDFqyComN130UbRLVU0xpLNqHLf1PpxxdYhWUBQ9DluRWq8QTWGPIJ6qWlDOA7rAGK8A3qwUvOIsuJ6Nt76P7Ma3Rv9Q7WgHnQF7G+lHNJJx7DGrhO13mdV42kfU/pdugwcs84vsJqQncFaUm6c/iMqyg0R6Bnih24zTQzEdVQLX3ipUUPVG5TzUxENUrPCNymmpmIapSeMBFHmIjPhIk4wkR8JkzEESbiM//NRIbhNvUKadGCm/se1Sg9F+E2tY1DSEo7fsB9T+Z1qjyjlY34g9IoknIF7r5671FUImtwm0taMDgHbXP3XUVloiUdtznZxQPoiU/PGw+j1+L7XUalch/xJtPMonLRCb4Eq2HLIhpdFEqN1oxvodGCnrZNwudya245Dv2GoWXQjYj+1mtaUw4JCSk0tdo/+LdELddEpMkAAAAASUVORK5CYII=",
        Aroma: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKASURBVGhD7ZlJyE1RAMcfIvOQshJK9tgYysI8rLCQWCmRbCztTOUjLFDGhYWNJBYKGxsLNkphJWTaUMrGwuz3f93bO50+7wzv3Huuur/6dd+595zve//37j3T67S0tARzGe/g9eL1GTyCO3EFTsf/gqf4x+FrVMhNOAYbiU8Q0494ECdjowgNUqpAG7ExxAYpPYCNYNAgcj9mJ0WQX7gEs5IiiHyCIzAbqYLIDZiNlEGuYDZSBvmMozELKYPIRZiF1EF2YBZSBzmBWYgJonFD3a2mKfY1nR+JtRMa5DsuRzEOb6NdR0uA2gkNch9NlqFd5xNOxVoJDfIMzRF8Cw5X7zTWSswzchbn4Tp8V5yz/YHzcRDGFkcvYoL4+gBj518X8Sfqg1qgEy6qDCK3YShL0fwb99BJ1UHeYmh3bAe5i06qDiJnYijnUbfWG2zErfUI//WcaEfmEmqXRkd7h6YxD/tV7Dee7EWz/h6MpoogmrpsRheH0Wx3CKOpIsgM9GEWfkC1eV+Uo6kiiI02807hLVyrEwYTcCGO75Z6aNms+idxkk64qCOIHuTy2jecjf2Yg6pXtrmATlIH0RuweYhmHftbsdF1s77aO0kdRP2+jXqj8voL1O3Uj4n4Css2u9BJ6iA3cDi0ltd0ZUq31GM1Hi+OJuq2Vd97DyB1kK3oyxo0267CaFIGeY6j0JdjaLY/itGkCvIVveZEBvoGyva/i3I0KYJ8Qfse90XthnBlt9RjGm7Hxd2SB4MGuYlaLabE7rV2oxPfIC9RP5hKLXX34VysAi2hzf+ddBw5h3Whkd8c2bU2cdLEIGI9VjLXqjtIMNfwsYeN+J2wpaXFh07nL6DrS1NazQJlAAAAAElFTkSuQmCC",
        Vegetarian: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOTSURBVGhD7dpZyE1fGMfxVyTzkDFFhEsXoty5UJSUC7MUF1yYyoWSEiXzcKe4UZKZlPSv/4WMyTzlBkUis4yFlOn707trtXv2u5+99zrndXF+9SnO2Xutvc/ZZ61nLZoaaaSRuqYvpmMDjuE8bjQ71/ya3psGHftPpQeW4jp+4beTjr0Cnas2Wi3qfDM+w7rQIj5B31Tdb2gu3sC6qCpeYQ5qnq7YD+siYlIfXVCT9MMtWB3XggYI9Rk1ffAAVoe1pD7Vd5TocboDq6N60GgY5TE7CKuDetqHStHoZDXs9RwnsAOrsBFbcAg38RXWeZbSo1lPlBlin2INhiMvHTAeW/EMVnsJDc2l5hlNdlaDWT5gOdqjTNpiMjTbW+2LvtFC0Z0XmbEvYRBiZBGsPuQjCn0rqn+shiz/oyNiZSWsfhKL4c5VWI2kadKKeRPKWlh9JS7DFZXXnir2CwYjdjTCWf0lfqI3cqP1hNVAmj45bwZiHmYj7xs8Cau/0FTkRiODdXLoO/IWRhq9ZuAUXmMmPLkLq8/QeuTmKKyTQ6eRlXaYjyfQsf+hPzzRuXpk0/2lHUZuLsA6ObQdVsbiHnTMD2gEagNvRiHdl0XL5tzchnVyaDXCaIbehWSQeIcJKJqFSPdl0XIiN541hy46yRCE57zECJTJcYT9ZHHdiOfRegQ9MhPxvvk1eYxhKBOV6t4i0vVoeX7sovFev4Pk7yowy96EMgth+y1x/di1m2Gd3BKNNGNQJRdhtW1Zh9x4J8SQd47Iikp5q90srglRa+QiG23aPawS/dZUPVttW1Si9IIrLa0JQm9RdetzGay2s+im3VkCq5G0BQgzCUUmwHFQuWO1nUXrFXe0eNE2ptVQ4iFUUiQZCj2Smgs835J+i0W3W7UKLbzc3QSrscQKhFF9lbynC9yGkUh/Q6OxF2FbXq5iMR3duRb8VoP65AcgjC7cOlbzi2Zi/e6y2vNQxdANpaItGKtRq0TYDevYWKoO8X83x9KN7kQ6B5A+LhY9ipWjGugawobPQKOHJjIVjdrK0bojPCYWPZKdECV5m9gaQr+lXovhPqJtYifRFr92TawOa0FPQfSbSKLHrB7/0LMHnVHzaDTTcGhdRBUvoHK+rtE8o5I/rwLw0FaoSvPuaLXohlSbqZhTZWpdqEXH6hxtgbbqDVjRDuAU6NM9grNI/sOA/qzX9J6OcZfijTTSSNU0Nf0BNq3Oqt/VEFsAAAAASUVORK5CYII=",
        Producers: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGLSURBVGhD7ZahSwRBGMVX0CyiYDD4P1i0GrQZTXbBZBDxD1CsRoNWk9VmEDRY7CJarCLYBdH3zlt4DN/uDufeztz5PfhxN/Nmvrl3fLtM4XK5RkJH4CGCc5C1LsB3BHcga3mQ3LQMNiNYBS7Xf9QGOIhgC2Qtf/3mpqRB5vufTZoFU79fK5UkyCQ4BE+9Ub1WwCtY742q1XmQBXALysJLwNIE2AefgOuabq2dBuG/+ga08DEIxVa6ArruHdS1VydBylb6AmHhF6AqWylcR+raa+hBwlayYHuFrWRxBqo01CBrIGwli1MQtpIF22sOzBhcAmtPyEBBuMkqlhIPYhVLiQfRIntAH1CO1b8H6i8C9QnndA33qN90RitBdoCKY/XDQ6aB+oRzqr+eESUP0le2QR7BtcCx+h9A/RugPuGcruEe9ZvOaCVIDngQq1hKWgnCG+q2EN5Yn4H6u0B9wjldwz3qN53RSpCxeWt5ECGLIGPzjOSAB7GKpWSgICdA7z05wN/kcrlcI6+i+AEt1VXZx2D8cwAAAABJRU5ErkJggg==",
        Synonyms: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANFSURBVGhD7dlJyE1hHMfxi4QQGUJk2kiU2AgliiRhZ1ooC9OGd6GkEBtThpQylHlhyMKQWbKQjAusLGRaKEORUmT6/tRTT0//e9/nnPuce+9b91efxft2zvOcc59znumUmmmmmYZMH2zAHTzCGcxFO7SZTMJH/DWcRycUkg5YgJO4gSPI++sNwCdYN+EcQPKoYjW9VaFuqgeyZCessny/MQzJopa4D6sy5wqy5CmsckLLkCx6nKxKQlMRm9ewygitRbLonbAqCe1CbNRLWWWE9CMmyzVYlYR0w7FZCqsM31f0RLIchVVRaAtisxBWGb6VSJo5sCoKzUZMOuMNrDLkO1YheTRO3IRVqe8ZYrrh9QjP1Zihd2w5+qOw6AIvI7yA0EWouy4XjUff4J9zGzWPulj9ciewGWoF/6JkBxTd0GjMhM4bguPwj/2FMah7huID/IuTc3gf/M9yEA2TifgB60IrUffaFzHpjfEYgUJnxothXWwlXzASlTIWt+Cf9xKLUEgGQd2mX2GMF+gCK5MRdgy+pNMXl9hB07ICYbQW0S9vHe9odqwWS5auyNMajgZHjSOnoC7+LtRS1rGh/UiW6bAqqYUHSJYlsCqphXtIlnreyF4kyzRYlcT6g0PYBvVEevk1O27tPdHYpXElWap92R/Cyjh8hnWOeqyky2AX7ahYFcaoNGUfjtP4CR2r1tMLrqegkAxEnlZ5jo5oLTpGOyq9/v9VYPJMUWQfGiYTkGfSKHrWC3tMsmQwrGm89nCtafwrhDet4/qhptGvtwdaWG2EtbDaDkULq1HQwmoGXFe5GuE511GTjWstda8ivIDQBVRa6iq6YC2Jw3MLmc36Sb35oGih9A7++epitaWkpXQLtDROGu24+xWWE7sd5KL1htbsVlmid0n7Askeudi1xlZkzSZYZfl0M0lSxJapyzxYZfn0yKl3rDrqoawKQvrmkTXabbHKCiXZeYz9rDAFWfMEVlmh3ag66k61gLEqcC4hT2J6Q1mHJNF+bLmb0WCW9dObyxpYZYY0pU+W9tDLeQz6bngYs1BN99gdb2FdvHMWbSKaxpT7FKfNubytXZd0gx4ztfRjqDebDz0FzTTTTLKUSv8AyRjiid1+nhEAAAAASUVORK5CYII=",
        Alternative_spelling: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMwSURBVGhD7dhJyI1RHMfxiwwZIjOxYkFKpoiNFTIvKGGB8MpMmRc2JBIrbChjKYRICBmSjalslJKpDCkLU6bw/b05dTr+997nuc/z3Hrq+dVn8d773HPec+95znPOv1SkSJFcZwSO4R4uYy6aIleZjV/4EziJZshFuuMLwkE485CLLIA1AOciMktbrMAR7MME1Jq1sAbg3Ecm6YvnCDs8jlrm8xSEbfmOIvU0gb4hq0NZh7gZDast+YkhSD2DYHXoPEGc9MRrWG19wixkkkWwOnW0hHZGlLTAHfif34M1mI+uSD3DcB6/4Xds0Te5DdUGtB/+505AUzdR2mEq9DQdqhf+RQM4hygDCLkBdYLSBmOgPjbDv/YR9H6iTMJ7+A1fR7kB6B98Frwmj2Fd/xF78cJ7zfcBWgkTZSC+w+ogpAFsh6aM5rfuF02PndA3rejXjPsLjkfiHITVuM8fQNTEGdBYJE6lZ4KcRRfUGg3oLay2Ha1SiXMNVuNOA5KmHn2UlsJqXL6hF5KmHn003rRXEHagub0EaaQefTSmJdbjAV5Cp7NUbkAv9eijSJEiOYmOy1fxCg+xAVrxcpWVsLYzWrabI/Noi6592A3chrbn7REnvVFp46oHaqbpgzcIO9Z2Ps7+bDHCNnyabpnmFqyO5RCiplo5SCXUzKJzTKUtuiqHUeu242C14RxA5IzCbqiIvAnd4KcVtKXQNZo6VoehqEdX7besz8tX9EekbEXYgI6f07AMF1CpNmv5Af1q1aIKfLkbXcfvyBVMndetRtLwGTNQLloQ9Mxw16uUtBAqWk9Ga0SOToB+59VoldLxeDp64DSs6xzdRzsQllL1t1Yj/1pN6ZqjbbXfWEgly5vYiMGw6k4jsRrLMQB6roQLgbbt/aDCm1YprWr++/pCE9W0zsBvMKRaVy3RlNLUstoMqcwa9yH6XybCalx0ANKBqNboZn8Kq22fXxBMlC0IG38HVRmTpiOqLddacFLLcOyC5u4qdEBa0ZPZGoCjeyYXuQRrAI4WgFxEzwVrAKIqZpICYF2jPdcphIPQ0j4TuYoGMweaZndxGHouFSlSJPWUSn8BpFAiK0cujYMAAAAASUVORK5CYII=",
        Fat_dry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPrSURBVGhD7ZlbqFVVGIVPaYlG+WJCBaFBhYFYLxIkWEmaBJGUSGGCIUilViQpSFEkpXgJy0ylILAi6KHABwVRSvOKpYYRBRaBvaRCYVeT8hvGgsFk//86evZ82x984NkO9r/nusxrX48ePbrKS3jj//9sZTC+iEPP/9XOaFR+0Pm/KnIn/oe/4AP6oIUFqPwh7E/jP0blt+PV+qAWn6IKyX9xKUboLpzAJq/GT8WI27DJyuM4DrvOreiF5PMYMRvLfHYX30HPnsbrsOusRC+kq509+zvR859jxBD8DT3/Clbha/RCaljEcPwHPT8DIyajZ8/i9dh19KVeSN6OEQ+hZ//CYRhR3u19WIX70AudwqyLVCfg+W2Yof/3/MtYhfnohT7DjPfR88sx4xh6fhpW4TX0Qu9ixl70/OMYoUGzfJ/UFVehvMKvYsb36Pn7MUIdg2flNViFsiG6Qxk/oucfxohODRmFVXgTvdBGzPgCPT8HIy5Hz8qxWIUX0At9ghlb0POLMEO9oOfvxipMRy+kXiZjNXr+A8zYg55/CqtwE3ohmY28s9CzP+ElGLEWPa9ZcDXKF3geRnSaCYzHiAfRs5owXoFV2IBeTGuMjCPo+bcwQj3X3+h5zZ6rcAd6ITkRIxaiZ3WVR2LER+h5XYjscRwQ5Qw4m5prhVde5VUYcQ96VmYz5gFRvsTyXoxYh579A6/FTujqH0TPf4NV1u/6Un25FzuA0SOgFZ5+vOfVQ0VoKexZ+ShWQbe7LDYJI8oxRWuTERixGz1/FKtwKZY90ocYoRe8XMY+gxEa1T0r1dFU4TH0Qnqpr8SI9ej5C+26NderggYrdadeLNsh0WDoWW0lRS+9KBdyGoyr0WymNb6BEeoMNE3x/EyM6DQz0DSpCk+jF9qFGXqPPL8CM35Az2tDowrlAKZ9rozF6PnNmKGlgueXYBW0+PFCeu6zwWsuen4/ZryNnl+DVbgBvZDU5C/iEfTsV5ihH+7597AKnV7IrCHa4vFsW0O0heT5TViFskvVWKLBMuJJ9Hxb56Af7vm2zuGiKZe/32KGfojn266wGur5J7AK2tvyQtpwyCi3RXXyFXEZ6jzF89nZyoD4Er1QtmmnDWxNFj2v5W3EBPRs20zgotExmr7ci+lYLqKcMZ/BrGPQLMHzh7EKr6MX0mOgxyHCj+zkDoy4Cn9Fz1c59NHJ65/ohbJ51hT0rMw2FpahZ3Xnb8auMwa/Qy90C0ZojvQ7NvmTmB3ZPYc6sWryW7Eauv3N7Lc/A5UOUpvGP6sPWrgLf0ZdpGw/rCtoaq6VXn9PXtV4TTt08Nkf9L3ZSrJHjx4XRF/fOYQu/vR3iqdjAAAAAElFTkSuQmCC",
        None : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD8SURBVGhD7ZlBDoMwEAO5tNf+tY/stwqLsMQBokB2HRPtSBYKSNhzzpQkSTIkr+3ZA7fuz5Lfku964mKd1m0bmoDEfwtTxrrQ2yTzXrKXQBgyewnEttimWxz90BIpE9bJlAnvYsgwOlYii2gSIKKQLgE8i7tJAI8B3SVAyxAZCXBnkJwEuDJMVgLUDJSXAKWhj5EAZ4OPIisBamTkJUBJ5jESxhAiJQlEXqZGApGVOZOw96VvUtQMlZe5MlBW5s4wOZmWQTIyHkO6y3gO6CYTUUyXiSykyTCKwjsYEiCsiykB3DuHulYY4qIHQIYpAazTRQIMcRmaJEmiwjTNnPF2NOdzNQMAAAAASUVORK5CYII="
    }

    return icons[detail]
}